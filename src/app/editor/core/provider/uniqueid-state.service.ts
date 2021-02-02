import { Injectable, Component } from '@angular/core';
import { maxBy , cloneDeep} from 'loadsh';

@Injectable({
  providedIn: 'root'
})
export class CompUniqueIdStateService {
    ELEMENT_UNIQUE_ID:number =  10000;
    NODE_UNIQUE_ID:number = 40000;
    LINE_UNIQUE_ID:number = 60000;

    constructor() { }

    elementUniqueIdState(comps:any[] = []) {
        let len = comps.length;
        if(!len) return this.ELEMENT_UNIQUE_ID;
        let currentMaxId = maxBy(cloneDeep(comps), 'uniqueId');
        let nextId = ++currentMaxId['uniqueId'];
        return nextId || this.ELEMENT_UNIQUE_ID;
    }
}
