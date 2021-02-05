import { Injectable, Component } from '@angular/core';
import * as _ from 'loadsh';
import { cloneDeep } from 'loadsh';

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
      "nodeDTOs":[
        {
          "uniqueId": 0,
          "nodeId": null,
          "linkElementConfigId": null,
          "nodeDirection": "right",
          "nodeType": "custom",
          "nodeIndex": 1,
          "nodeTag": null,
          "expression": null,
          "segmentDTOs": []
        },
        {
          "uniqueId": 0,
          "nodeId": null,
          "linkElementConfigId": null,
          "nodeDirection": "left",
          "nodeType": "custom",
          "nodeIndex": 1,
          "nodeTag": null,
          "expression": null,
          "segmentDTOs": []
        },
      ]
    }

    initDataObject(type:string) {
      let compJsonSchame = {
        node: this.COMP_MODE_DATA_JSON
      }
      // 深度
      return _.cloneDeep(compJsonSchame[type]);
    }

    
}