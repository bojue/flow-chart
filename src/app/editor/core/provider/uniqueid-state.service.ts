import { Injectable, Component } from '@angular/core';
import { maxBy , cloneDeep} from 'loadsh';

@Injectable({
  providedIn: 'root'
})
export class CompUniqueIdStateService {
    DEF_UNIQUE_ID:number =  1000;

    constructor() { }

    compUniqueIdState(comps:any[] = []) {
        let len = comps.length;
        if(!len) return this.DEF_UNIQUE_ID;
        let currentMaxId = maxBy(cloneDeep(comps), 'uniqueId');
        let nextId = ++currentMaxId['uniqueId'];
        return nextId || this.DEF_UNIQUE_ID;
        
    }
}
