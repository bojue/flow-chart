import { AfterContentChecked } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import * as _ from 'loadsh';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit , AfterContentChecked{
  elements:any[];
  nodeDTOs:any[];
  segmentDTOs:any[];
  H:30;
  W:100;
  LAB:10;

  constructor() { }

  ngOnInit(): void {
    this.initData();
    this.getData();
    this.appendLinesInfo();
  }

  ngAfterContentChecked() {
    this.ngOnInit();
  }

  initData() {
    this.nodeDTOs = [];
    this.segmentDTOs = [];
  }

  getData() {
    let len = this.elements.length;
    for(let i=0;i<len;i++) {
      let element = this.elements[i];
      this.getNodeDTOs(element);
    }
  }

  getNodeDTOs(ele:any) {
    let nodeDTOs = ele['nodeDTOs'] || [];
    let len = nodeDTOs.length;
    for(let i=0;i<len;i++) {
      let nodeDTO = nodeDTOs[i];
      nodeDTO['positionLeft'] = ele['positionLeft'];
      nodeDTO['positionTop'] = ele['positionTop'];
      this.nodeDTOs.push(nodeDTO);
      this.getSegmentDTOs(nodeDTO);
    }
  }

  getSegmentDTOs(nodeDTO:any) {
    let segmentDTOs = nodeDTO['segmentDTOs'] || [];
    let len = segmentDTOs.length;
    for(let i=0;i<len;i++) {
      let segmentDTO = segmentDTOs[i];
      this.segmentDTOs.push(segmentDTO);
    }
  }

  appendLinesInfo() {
    let nodes = this.nodeDTOs;
    let lines_len = this.segmentDTOs.length;
    for(let i=0;i<lines_len;i++) {
      let line = this.segmentDTOs[i];
      let sNode = _.find(nodes, {
        uniqueId: line.inputNodeUniqueId
      });
      let eNode = _.find(nodes, {
        uniqueId: line.outputNodeUniqueId
      })
      if(!!sNode || !!eNode) {
        line['x1'] = sNode['positionLeft'] + 76;
        line['y1'] = sNode['positionTop'] + 15;
        line['x2'] = eNode['positionLeft'] - 12;
        line['y2'] = eNode['positionTop'] + 15;
      }
    }
  }

}
