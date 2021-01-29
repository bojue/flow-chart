import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../node-basic/basic/basic.component';
@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent extends BasicComponent implements OnInit {
  width:number = 100;
  height:number = 30;
  constructor() {
    super()
  }

  ngOnInit(): void {
    console.log(this.compJsonSchame)
  }

}
