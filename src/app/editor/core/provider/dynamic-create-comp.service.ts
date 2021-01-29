import { Injectable, Component } from '@angular/core';
import { NoMatchComponent } from '../comps-libs/no-match/no-match.component';
import { NodeCalculationComponent } from '../comps-libs/node-comps/node-calculation/node-calculation.component';
import { NodeEndComponent } from '../comps-libs/node-comps/node-end/node-end.component';
import { NodeJudgmentComponent } from '../comps-libs/node-comps/node-judgment/node-judgment.component';
import { NodeStartComponent } from '../comps-libs/node-comps/node-start/node-start.component';
import { NodeComponent } from '../comps-libs/node-comps/node/node.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicCreateCompService {

  constructor() { }

  getComponentByType(type:string) {
    let comp;
    switch(type) {
      case 'node':
        comp = NodeComponent;
        break;
      case 'end':
        comp = NodeEndComponent
        break;
      case 'start':
        comp = NodeStartComponent;
        break;
      case 'calculation':
        comp = NodeCalculationComponent;
        break;
      case 'judgment':
        comp = NodeJudgmentComponent;
        break;
      default:
        comp = NoMatchComponent;
    }
    return comp;
  }

  getDefultComponent() {
    return NoMatchComponent
  }
}
