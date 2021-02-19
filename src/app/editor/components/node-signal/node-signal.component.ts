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
      name:"Elements",
      type:'type',
      child:[{
          id:1,
          name:"Ele-1",
          type:'element'
        },{
          id:2,
          name:"Ele-2",
          type:'element'
        },{
          id:3,
          name:"Ele-3",
          type:'element'
        },{
          id:4,
          name:"Ele-4",
          type:'element'
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
