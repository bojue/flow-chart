import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-node-signal',
  templateUrl: './node-signal.component.html',
  styleUrls: ['./node-signal.component.scss']
})
export class NodeSignalComponent implements OnInit {

  datas:any[];
  @Output() createComp = new EventEmitter();
  @Output() displayComp = new EventEmitter();
  
  constructor() { 

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.datas = [{
      id:1,
      name:"空调001",
      deviceId:10001,
      type:'device',
      child:[{
          id:1,
          name:"温度",
          currentVal:"23.8",
          state:0,
          type:'signal'
        },{
          id:2,
          name:"湿度",
          currentVal:"11",
          state:0,
          type:'signal'
        },{
          id:3,
          name:"电压",
          currentVal:"11",
          state:0,
          type:'signal'
        },{
          id:4,
          name:"电流",
          currentVal:"11",
          state:0,
          type:'signal'
        }
      ]
    }]
  }


  dragCreateComp(event:MouseEvent,item:any ) {
    let compData = {
      event:event,
      expression:item
    }
    this.createComp.emit(compData);
  }

}
