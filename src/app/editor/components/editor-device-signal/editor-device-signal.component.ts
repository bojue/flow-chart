import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editor-device-signal',
  templateUrl: './editor-device-signal.component.html',
  styleUrls: ['./editor-device-signal.component.scss']
})
export class EditorDeviceSignalComponent implements OnInit {
  datas:any[];
  @Output() createComp = new EventEmitter();
  
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
    console.log(item, event)
    let compData = {
      event:event,
      data:item
    }
    this.createComp.emit(compData);
  }
}
