import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicCreateCompInitService } from '../../core/provider/dynamic-create-comp-init.service';
import { DynamicCreateCompService } from '../../core/provider/dynamic-create-comp.service';
import { ContentRefHostDirective } from '../../directives/content-ref-host.directive';
import * as _ from 'loadsh'
import { CompUniqueIdStateService } from '../../core/provider/uniqueid-state.service';
@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {
  currentViewContRef:any; // 当前的组件容器
  currentPageNodes:any[]; // 页面元素jsonSchame列表
  currentPageComps:any[]; // 页面元素列表
  currentActiveNode: any;
  activeCompInstance:any;
  activeCompState_index:number;
  activeCompState_comp:any;
  activeCompState_drag_sx:number; // 拖拽开始位置x
  activeCompState_drag_sy:number; // 拖拽开始位置y
  compDefType:string = 'node';
  
  @ViewChild(ContentRefHostDirective, { static: true}) viewContRef: ContentRefHostDirective;  // 当前的组件

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
    this.activeCompState_index= 0;
    this.currentPageNodes = [];
  }

  ngAfterViewInit(){
    this.currentViewContRef= this.viewContRef.viewContainerRef;
  }


  getContentBoundingClinetRect( ) {
    let dom = document.getElementById("content");
    let rect= dom.getBoundingClientRect();
    return rect;
  }

  creatCompByDrag(createCompData:any) {
    this.initState();
    let expressionData = createCompData.expression;
    let event = createCompData.event;
    this.addComponent(event, expressionData )
  }

  // 通过拖拽创建新组件
  addComponent(event:MouseEvent, expressionData:any,  compType:string = this.compDefType) {
    let _compType =  compType;// 获取创建组件的类型
    let addCompJsonData = this.initCompDataService.initDataObject(_compType);
    if(event) {
      this.initPagesCompState();
      let domContentRect = this.getContentBoundingClinetRect();
      addCompJsonData['positionLeft']  = event.clientX - domContentRect.x;
      addCompJsonData['positionTop'] = event.clientY - domContentRect.y;

      // update state
      addCompJsonData['active'] = true;
      addCompJsonData['uniqueId'] = this.uniqueidStateService.compUniqueIdState(this.currentPageNodes);
    }

    this.currentPageNodes.push(addCompJsonData);
    this.activeCompState_index = this.currentPageNodes.length -1;
    this.renderComponent(_compType);
  }

  initPagesCompState() {
    let len = this.currentPageNodes.length;
    for(let i=0;i<len;i++) {
      let compJsonSchame = this.currentPageNodes[i];
      compJsonSchame.active = false;
    }
  }

  renderComponent(compType:string) {
    let compJsonSchame = this.currentPageNodes[this.activeCompState_index]
    let comp = this.dynamicCreateCompService.getComponentByType(compType); // 声明一个组件
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp); // 实例化一个组价
    let compRef = this.currentViewContRef.createComponent(componentFactory); // 动态创建一个组件
    let compInstance = compRef.instance;
    this.activeCompInstance = compInstance;
    this.currentActiveNode = compInstance;
    (<any> compInstance).compJsonSchame = compJsonSchame;
    (compInstance).onChildComponentChange.subscribe(event => {
      if(event  && event.data) {
        let compJson = event.data;
        this.initPagesCompState();
        let _eType = event!.e!.type;
        if(_eType=== 'click') {  
          console.log(event.e)
          this.activeCompState_drag_sx = event.e.clientX;
          this.activeCompState_drag_sy = event.e.clientY;
        }else if(_eType === 'dragstart') {
          this.activeCompState_drag_sx = event.e.clientX;
          this.activeCompState_drag_sy = event.e.clientY;
        }else if(_eType === 'dragend') {
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


  initViewContentRef() {
    
  }
}
