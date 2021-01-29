import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicCreateCompInitService } from '../../core/provider/dynamic-create-comp-init.service';
import { DynamicCreateCompService } from '../../core/provider/dynamic-create-comp.service';
import { ContentRefHostDirective } from '../../directives/content-ref-host.directive';
import * as _ from 'loadsh'
@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {
  currentViewContRef:any; // 当前的组件
  currentPageNodes:any[]; // 页面的
  activeCompIndex: number;
  activeCompInstance:any;
  compDefType:string = 'node';
  
  @ViewChild(ContentRefHostDirective, { static: true}) viewContRef: ContentRefHostDirective;  // 当前的组件

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dynamicCreateCompService: DynamicCreateCompService,
    private initCompDataService: DynamicCreateCompInitService
  ) { 
    
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {
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
      let domContentRect = this.getContentBoundingClinetRect();
      addCompJsonData['positionLeft']  = event.clientX - domContentRect.x;
      addCompJsonData['positionTop'] = event.clientY - domContentRect.y;
    }
    this.currentPageNodes.push(addCompJsonData);
    this.activeCompIndex = this.currentPageNodes.length -1;
    this.renderComponent(_compType);
  }

  renderComponent(compType:string) {
    let compJsonSchame = this.currentPageNodes[this.activeCompIndex]
    let comp = this.dynamicCreateCompService.getComponentByType(compType); // 声明一个组件
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp); // 实例化一个组价
    let compRef = this.currentViewContRef.createComponent(componentFactory); // 动态创建一个组件
    let compInstance = compRef.instance;
    this.activeCompInstance = compInstance;
    (<any> compInstance).compJsonSchame = compJsonSchame;
  }

  initState() {
    this.activeCompIndex = -1;
  }


  initViewContentRef() {
    
  }
}
