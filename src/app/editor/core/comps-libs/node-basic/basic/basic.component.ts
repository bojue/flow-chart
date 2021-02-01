import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';

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
    this.isActiveBool = this.compJsonSchame.active
  }

  appendPixel(param:string) {
    return (param in this.compJsonSchame)  && this.compJsonSchame[param] + 'px'
  }


  selComp(event:MouseEvent) {
    event.stopPropagation();
    let item = {
      e:event,
      data:this.compJsonSchame
    }
    this.onChildComponentChange.emit(item)
  }

}
