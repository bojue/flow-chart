import { EventEmitter, AfterContentChecked } from '@angular/core';
import { AfterContentInit } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import * as _ from 'loadsh';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, AfterContentInit, AfterContentChecked {
  isActiveBool:boolean = false;
  @Input() compJsonSchame: any;
  @Output() onChildComponentChange  = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  ngAfterContentInit() {

  }
  
  ngAfterContentChecked() {
    this.getNodesPostion(this.compJsonSchame['nodeDTOs']);
  }

  getCompActiveState() {
    if( this.compJsonSchame) {
      this.isActiveBool = this.compJsonSchame.active
    }
  }

  appendPixel(param:string, obj = this.compJsonSchame) {
    if(!obj) return false;
    return (param in obj)  && obj[param] + 'px'
  }

  // 操作元素
  controlComp(event:MouseEvent) {
    event.stopPropagation();
    let item = {
      e:event,
      type:'element',
      data:this.compJsonSchame
    }
    this.onChildComponentChange.emit(item)
  }

  // 操作节点
  controlNode(event:MouseEvent, state:string, nodeData?:any) {
    event.stopPropagation();
    let item = {
      e:event,
      type:'node',
      state:state,
      nodeData:nodeData,
      data:this.compJsonSchame
    }
    this.onChildComponentChange.emit(item)
  }

  // 获取节点数据
  getNodesPostion(nodes:any[], state?:string) {
    let nodeObjs = _.groupBy(nodes, 'nodeDirection')
    this.getNodesPostionByDirection(nodes, nodeObjs['left'], 'left');
    this.getNodesPostionByDirection(nodes,  nodeObjs['right'], 'right');
  }

  getNodesPostionByDirection(nodes:any[], list:any[], direction:string = 'right' || 'left') {
    let len = list.length;
    let perY = 20;
    let startY = len % 2 === 0 ?  - perY * (len / 2) + 20:  - perY * (len / 2) + 20;
    for(let i=0;i<len;i++) {
      let node = list[i];
      node['y']  = startY + i * perY ;
      let nodeData = _.find(nodes, {
        uniqueId: node.uniqueId
      });
      if(nodeData) {
        nodeData['y'] = node['y'];
      }
    }
    this.compJsonSchame['nodeDTOs'][direction] = list;
  }




}
