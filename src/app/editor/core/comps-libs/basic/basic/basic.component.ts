import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import * as _ from 'loadsh';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  isActiveBool:boolean = false;
  @Input() compJsonSchame: any;
  @Output() onChildComponentChange  = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {

  }

  getCompActiveState() {
    if( this.compJsonSchame) {
      this.isActiveBool = this.compJsonSchame.active
    }
  }

  appendPixel(param:string) {
    if(!this.compJsonSchame) return false;
    return (param in this.compJsonSchame)  && this.compJsonSchame[param] + 'px'
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
  controlNode(event:MouseEvent, state:string ) {
    event.stopPropagation();
    let item = {
      e:event,
      type:'node',
      state:state,
      data:this.compJsonSchame
    }
    this.onChildComponentChange.emit(item)
  }

  // 获取节点数据
  getNodesPostion(nodes:any[], state?:string) {
    let leftNodes = _.groupBy(nodes, 'nodeDirection')
    console.log(leftNodes)
  }

}
