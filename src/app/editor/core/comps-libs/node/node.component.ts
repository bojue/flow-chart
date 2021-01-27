import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  width:number = 100;
  height:number = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
