import { Injectable, Component } from '@angular/core';
import { NoMatchComponent } from '../comps-libs/no-match/no-match.component';
import { ElementComponent } from '../comps-libs/comps/elements/element.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicCreateCompService {

  constructor() { }

  getComponentByType(type:string) {
    let comp;
    switch(type) {
      case 'node':
        comp = ElementComponent;
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
