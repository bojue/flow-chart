import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { DynamicCreateCompService } from '../../core/provider/dynamic-create-comp.service';
import { ContentRefHostDirective } from '../../directives/content-ref-host.directive';

@Component({
  selector: 'app-editor-content',
  templateUrl: './editor-content.component.html',
  styleUrls: ['./editor-content.component.scss']
})
export class EditorContentComponent implements OnInit {
  currentViewContRef:any; // 当前的组件
  currnetPageComponets:any[]; // 页面的
  
  @ViewChild(ContentRefHostDirective, { static: true}) viewContRef: ContentRefHostDirective;  // 当前的组件

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dynamicCreateCompService: DynamicCreateCompService
  ) { 
    
  }

  ngOnInit(): void {
    this.initData();
  }

  initData() {

  }

  ngAfterViewInit(){
    this.currentViewContRef= this.viewContRef.viewContainerRef;
  }


  creatCompByDrag(createCompData:any) {
    let data = createCompData.data;
    let event = createCompData.event;
    this.createCompByDrag(event, data)
  }

  // 通过拖拽创建新组件
  createCompByDrag(event:MouseEvent, data) {
    let comp = this.dynamicCreateCompService.getComponentByType('name'); // 声明一个组件
    let component = this.componentFactoryResolver.resolveComponentFactory(comp); // 实例化一个组价
    this.currentViewContRef.createComponent(component); // 动态创建一个组件
  }

  addComp() {

  }
  render(index:number) {
    
  }

  initViewContentRef() {
    
  }
}
