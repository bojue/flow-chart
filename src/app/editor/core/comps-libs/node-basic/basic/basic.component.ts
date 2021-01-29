import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {
  @Input() compJsonSchame: any;
  constructor() { }

  ngOnInit(): void {
  }

  appendPixel(param:string) {
    return (param in this.compJsonSchame)  && this.compJsonSchame[param] + 'px'
  }

}
