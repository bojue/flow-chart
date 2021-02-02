import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicCreateCompInitService } from '../../core/provider/dynamic-create-comp-init.service';
import { DynamicCreateCompService } from '../../core/provider/dynamic-create-comp.service';
import { ContentRefHostDirective } from '../../directives/content-ref-host.directive';
import * as _ from 'loadsh'
import { CompUniqueIdStateService } from '../../core/provider/uniqueid-state.service';
import { ThrowStmt } from '@angular/compiler';
import { SvgCanvasComponent } from '../../core/comps-libs/comps/lines/svg-canvas/svg-canvas.component';
import { LineComponent } from '../../core/comps-libs/comps/lines/line/line.component';
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

  @ViewChild(ContentRefHostDirective, { static: true }) viewContRef: ContentRefHostDirective;  // 当前的组件

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dynamicCreateCompService: DynamicCreateCompService,
    private initCompDataService: DynamicCreateCompInitService,
    private uniqueidStateService: CompUniqueIdStateService
  ) {

  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
    this.activeCompState_index = 0;
    this.currentPageNodes = [
      {
        active: true,
        elementId: 0,
        expression: "5",
        linkConfigId: 0,
        linkElementConfigId: null,
        positionLeft: 100,
        positionTop: 100,
        uniqueId: 10000,
        nodeDTOs: [
          {
            "uniqueId": 40000,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": []
          },
          {
            "uniqueId": 40001,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": [
              {
                "segmentId": null,
                "inputLinkElementConfigId": null,
                "inputNodeId": null,
                "inputNodeUniqueId": 40001,
                "outputLinkElementConfigId": null,
                "outputNodeId": null,
                "outputNodeUniqueId": 40002
              }
            ]
          }
        ],
      },
      {
        active: false,
        elementId: 0,
        expression: "5",
        linkConfigId: 0,
        linkElementConfigId: null,
        nodeDTOs: [
          {
            "uniqueId": 40002,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": [
              {
                "segmentId": null,
                "inputLinkElementConfigId": null,
                "inputNodeId": null,
                "inputNodeUniqueId": 40002,
                "outputLinkElementConfigId": null,
                "outputNodeId": null,
                "outputNodeUniqueId": 40004
              },
              {
                "segmentId": null,
                "inputLinkElementConfigId": null,
                "inputNodeId": null,
                "inputNodeUniqueId": 40002,
                "outputLinkElementConfigId": null,
                "outputNodeId": null,
                "outputNodeUniqueId": 40007
              }
            ]
          },
          {
            "uniqueId": 40003,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": []
          }
        ],
        positionLeft: 200,
        positionTop: 300,
        uniqueId: 10001,
      },
      {
        active: false,
        elementId: 0,
        expression: "5",
        linkConfigId: 0,
        linkElementConfigId: null,
        nodeDTOs: [
          {
            "uniqueId": 40004,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": []
          },{
            "uniqueId": 40005,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": []
          }
        ],
        positionLeft: 400,
        positionTop: 300,
        uniqueId: 10002,
      },
      {
        active: false,
        elementId: 0,
        expression: "5",
        linkConfigId: 0,
        linkElementConfigId: null,
        nodeDTOs: [
          {
            "uniqueId": 40006,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": []
          },{
            "uniqueId": 40007,
            "nodeId": null,
            "linkElementConfigId": null,
            "nodeDirection": "right",
            "nodeType": "custom",
            "nodeIndex": 1,
            "nodeTag": null,
            "expression": null,
            "segmentDTOs": []
          }
        ],
        positionLeft: 400,
        positionTop: 400,
        uniqueId: 10002,
      }
    ];
  }

  ngAfterContentInit() {
    this.currentViewContRef = this.viewContRef.viewContainerRef;
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

      // update state
      addCompJsonData['active'] = true;
      addCompJsonData['uniqueId'] = this.uniqueidStateService.elementUniqueIdState(this.currentPageNodes);
    }

    this.currentPageNodes.push(addCompJsonData);
    this.activeCompState_index = this.currentPageNodes.length - 1;
    this.renderComponent(_compType);
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

  renderComponent(compType: string = 'node', currentIndex?:number, componnet?:any) {
    let compIndex = currentIndex || this.activeCompState_index;
    let compJsonSchame = this.currentPageNodes[compIndex]
    let comp = this.dynamicCreateCompService.getComponentByType(compType); // 声明一个组件
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp); // 实例化一个组价
    let compRef = this.currentViewContRef.createComponent(componentFactory); // 动态创建一个组件
    let compInstance = compRef.instance;
    (<any>compInstance).compJsonSchame = compJsonSchame;
    (compInstance).onChildComponentChange.subscribe(event => {
      if (event && event.data) {
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

    })
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
    console.log(segment)
  }
}
