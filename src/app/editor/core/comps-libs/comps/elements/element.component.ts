import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../basic/basic/basic.component';
@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent extends BasicComponent implements OnInit {
  width:number = 100;
  height:number = 30;
  constructor() {
    super()
  }

  ngOnInit(): void {
    this.getCompActiveState();
  }

  drawLine() {
    
  }

}
