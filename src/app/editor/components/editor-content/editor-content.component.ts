import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicCreateCompInitService } from '../../core/provider/dynamic-create-comp-init.service';
import { DynamicCreateCompService } from '../../core/provider/dynamic-create-comp.service';
import { ContentRefHostDirective } from '../../directives/content-ref-host.directive';
import * as _ from 'loadsh'
import { EventManager } from '@angular/platform-browser';
import { LineComponent } from '../../core/comps-libs/comps/line/line.component';
import { cloneDeep } from 'loadsh';
import { CompUniqueIdStateService } from '../../core/provider/uniqueid-state.service';
import { JsonSchemaService } from '../../providers/json-schema.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JsonSchemaComponent } from '../json-schema/json-schema.component';
@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit, AfterContentInit, AfterContentChecked {
  currentViewContRef: any; // 当前的组件容器
  currentPageNodes: any[]; // 页面元素jsonSchame列表
  currentPageComps: any[]; // 页面元素列表
  currentActiveNode: any;
  activeCompInstance: any;
  activeCompState_index: number;
  activeCompState_comp: any;
  activeCompState_drag_sx: number; // 拖拽开始位置x
  activeCompState_drag_sy: number; // 拖拽开始位置y
  compDefType: string = 'node';
  jsonScheme:any[]; // json对象

  @ViewChild(ContentRefHostDirective, { static: true }) viewContRef: ContentRefHostDirective;  // 当前的组件

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dynamicCreateCompService: DynamicCreateCompService,
    private initCompDataService: DynamicCreateCompInitService,
    private uniqueidStateService: CompUniqueIdStateService,
    private eventManager:EventManager,
    private jsonSchemaService: JsonSchemaService,
    private modal: NgbModal
  ) {

  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.activeCompState_index = 0;
    this.currentPageNodes = [];
    this.jsonScheme = [];
  }

  ngAfterContentInit() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
    this.initRendeComps();
    this.initRenderLineComp();
    this.addLister();
  }

  addLister() {
    this.eventManager.addGlobalEventListener('window', 'keydown', event => {
      if(event.code === 'Delete') {
        _.remove(this.currentPageNodes, node => {
          return node.active === true 
        })
        this.activeCompState_index = -1;
        this.reRenderComp();
      }
    })
  }

  reRenderComp() {
    this.currentViewContRef.clear();
    this.initRendeComps();
    this.initRenderLineComp();
  }

  ngAfterContentChecked() {

  }

  getContentBoundingClinetRect() {
    let dom = document.getElementById("content");
    let rect = dom.getBoundingClientRect();
    return rect;
  }

  creatCompByDrag(createCompData: any) {
    this.initState();
    let expressionData = createCompData.expression;
    let event = createCompData.event;
    this.addComponent(event, expressionData)
  }

  // 通过拖拽创建新组件
  addComponent(event: MouseEvent, expressionData: any, compType: string = this.compDefType) {
    let _compType = compType;// 获取创建组件的类型
    let addCompJsonData = this.initCompDataService.initDataObject(_compType);
    if (event) {
      this.initPagesCompState();
      let domContentRect = this.getContentBoundingClinetRect();
      addCompJsonData['positionLeft'] = event.clientX - domContentRect.x;
      addCompJsonData['positionTop'] = event.clientY - domContentRect.y;
      addCompJsonData['expression'] = expressionData;
      // update state
      addCompJsonData['active'] = true;
      addCompJsonData['uniqueId'] = this.uniqueidStateService.elementUniqueIdState(this.currentPageNodes);
      let nodeLen = addCompJsonData.nodeDTOs.length;
      for(let i=0;i<nodeLen;i++) {
        let node = addCompJsonData.nodeDTOs[i];
        node.uniqueId = this.uniqueidStateService.nodeUniqueIdState(this.currentPageNodes, i);
      }
    }
    this.currentPageNodes.push(addCompJsonData);
    let currIndex = this.currentPageNodes.length - 1;
    this.activeCompState_index = currIndex;
    this.renderComponent(_compType,  currIndex);
  }

  initPagesCompState() {
    let len = this.currentPageNodes.length;
    for (let i = 0; i < len; i++) {
      let compJsonSchame = this.currentPageNodes[i];
      compJsonSchame.active = false;
    }
  }

  initRendeComps() {
    let len = this.currentPageNodes.length;
    for (let i = 0; i < len; i++) {
      this.renderComponent('node', i);
    }
  }

  initRenderLineComp(){
    let comp = LineComponent
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
    let compRef = this.currentViewContRef.createComponent(componentFactory);
    let compInstance = compRef.instance;
    (<any>compInstance).elements = this.currentPageNodes;
  }

  renderComponent(compType: string = 'node', currentIndex:number, componnet?:any) {
    let compIndex = currentIndex ;
    let compJsonSchame = this.currentPageNodes[compIndex];
    let comp = this.dynamicCreateCompService.getComponentByType(compType); // 声明一个组件
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp); // 实例化一个组价
    let compRef = this.currentViewContRef.createComponent(componentFactory); // 动态创建一个组件
    let compInstance = compRef.instance;
    (<any>compInstance).compJsonSchame = compJsonSchame;
    (compInstance).onChildComponentChange.subscribe(event => {
      if (event && event.data) {
        let type = event.type;
        if(type === 'element') {
          this.elementComponentChange(event);
        }else if(type === 'node') {
          this.nodeComponentChange(event);
        }

      }
    })
  }

  nodeComponentChange(event:any) {
    let domContentRect = this.getContentBoundingClinetRect();
    let _x = event.e.clientX - domContentRect.x;
    let _y = event.e.clientY - domContentRect.y;
    let _nodeData = event.nodeData;
    if(!_nodeData) return;
    let _direction = _nodeData.nodeDirection;
    let _currenComp = event.data;

    let elements = this.currentPageNodes;
    let len = elements.length;
    let eType = event.e.type;
    if(eType ==='dragstart') {
      _nodeData.befNodeActive = true;
    }else if(eType === 'dragend') {
      _nodeData.befNodeActive = false
    }
    for(let i=0;i<len;i++) {
      let element = elements[i];
      if(element['uniqueId'] === _currenComp['uniqueId']) {
        continue;
      }
      let _left = element['positionLeft'];
      let _top = element['positionTop'];
      let _pending = 10;
      let _nodes = _.groupBy(element.nodeDTOs, 'nodeDirection')[_direction === 'right' ? "left" :'right'];
      let _len = _nodes.length;
      let _offsetY = 5;
      let _offsetX = 10;
      for(let i=0;i<_len;i++) {
        let _node = _nodes[i];
        _top  += _node.y;
        if(event.state === 'output') {
          if(_x >= _left - _offsetX - _pending && _x <= _left - _offsetX + _pending && _y >= _top + _offsetY - _pending && _y <= _top + _offsetY+ _pending) {
            if(eType === 'dragend'){
              _node.nextNodeactive = false;
              if(_node) {
                _node.y = _nodeData.y;
              }
              this.appendLine(_node, _nodeData,  _nodeData.segmentDTOs);
              return;
            }else {
              _node.nextNodeactive = true;
            }
          }else {
            if(_node.nextNodeactive) {
              _node.nextNodeactive = false;
              break;
            }
          }
        } else if(event.state === 'input') {
          let _width = 70;
          _pending  = 15;
          if(_x >= _left - _offsetX + _width -  _pending 
              && _x <= _left - _offsetX + _width +  _pending 
              && _y >= _top + _offsetY - _pending 
              && _y <= _top + _offsetY+ _pending) {
            if(eType === 'dragend'){
              _node.nextNodeactive = false;
              if(_node) {
                _node.y = _nodeData.y;
              }
              this.appendLine(_nodeData, _node,  _node.segmentDTOs);
              return;
            }else {
              _node.nextNodeactive = true;
            }
          }else {
            if(_node.nextNodeactive) {
              _node.nextNodeactive = false;
            }
          }
        }
      }

   
    }
  }

  appendLine( nextNode, befNode, segmentDTOs:any[]) {
    if(befNode && nextNode) {
      let hasBefBool = _.find(segmentDTOs, {
        inputNodeUniqueId: befNode.uniqueId
      })
      let hasNextBool = _.find(segmentDTOs, {
        outputNodeUniqueId: nextNode.uniqueId
      })
      if(hasBefBool && hasNextBool) {
        console.info("触点连线已经存在，无需创建新的连接！");
      } else {
        let line = {
          "segmentId": null,
          "inputLinkElementConfigId": null,
          "inputNodeId": null,
          "inputNodeUniqueId": befNode.uniqueId,
          "outputLinkElementConfigId": null,
          "outputNodeId": null,
          "outputNodeUniqueId": nextNode.uniqueId
        }
        segmentDTOs.push(line)
      }
  
    }
  }

  elementComponentChange(event:any) {
    let compJson = event.data;
    this.initPagesCompState();
    let _eType = event!.e!.type;
    if (_eType === 'click') {
      this.activeCompState_drag_sx = event.e.clientX;
      this.activeCompState_drag_sy = event.e.clientY;
    } else if (_eType === 'dragstart') {
      this.activeCompState_drag_sx = event.e.clientX;
      this.activeCompState_drag_sy = event.e.clientY;
    } else if (_eType === 'dragend') {
      let _cx = event.e.clientX;
      let _cy = event.e.clientY;
      let _x = _cx - this.activeCompState_drag_sx;
      let _y = _cy - this.activeCompState_drag_sy;
      compJson['positionLeft'] += _x;
      compJson['positionTop'] += _y;
    }
    event.data.active = true;
  }

  initState() {
    this.activeCompState_index = -1;
  }

  drawNodeDTOs(compJsonSchame:any) {
    let nodeDTOs = compJsonSchame.nodeDTOs || [];
    let len = nodeDTOs.length;
    for(let i=0;i<len;i++) {
      let nodeDTO = nodeDTOs[i];
      this.drawSegmentDTOs(nodeDTO)
    }
  }

  drawSegmentDTOs(nodeDTO:any) {
    let segmentDTOs = nodeDTO!.segmentDTOs || [];
    let len = segmentDTOs.length;
    for(let i=0;i<len;i++) {
      let segmentDTO = segmentDTOs[i];
      this.drawSegmentDTO(segmentDTOs)
    }
  }

  drawSegmentDTO(segment) {

  }

  showJSON() {
    let pageElements = _.cloneDeep(this.currentPageNodes);
    this.jsonScheme = this.jsonSchemaService.getJsonByElements(pageElements);
    this.openSchemaComp();
  }

  openSchemaComp() {
    let activeModal = this.modal.open(JsonSchemaComponent,{
      size: 'xl'
    });
    activeModal.componentInstance.jsonSchema = this.jsonScheme;
  }
}
