import { Injectable, Component } from '@angular/core';
import * as _ from 'loadsh';

@Injectable({
  providedIn: 'root'
})
export class DynamicCreateCompInitService {
    constructor() {

    }
    COMP_MODE_DATA_JSON = {
      "uniqueId":0,
      "linkElementConfigId":null,
      "linkConfigId":0,
      "elementId":0,
      "positionTop":0,
      "positionLeft":0,
      "expression":"5",
      "nodeDTOs":[]
    }

    initDataObject(type:string) {
      let compJsonSchame = {
        node: this.COMP_MODE_DATA_JSON
      }
      // 深度
      return _.clone(compJsonSchame[type]);
    }

    
}