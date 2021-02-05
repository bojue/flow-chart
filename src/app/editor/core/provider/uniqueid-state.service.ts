import { Injectable, Component } from '@angular/core';
import { maxBy , cloneDeep} from 'loadsh';
import { v4 as uuidv4 } from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class CompUniqueIdStateService {
    ELEMENT_UNIQUE_ID:number =  10000;
    NODE_UNIQUE_ID:number = 40000;
    LINE_UNIQUE_ID:number = 60000;

    constructor() { }

    elementUniqueIdState(comps:any[] = []) {
        // let len = comps.length;
        // if(!len) return this.ELEMENT_UNIQUE_ID;
        // let currentMaxId = maxBy(cloneDeep(comps), 'uniqueId');
        // let nextId = ++currentMaxId['uniqueId'];
        // return nextId || this.ELEMENT_UNIQUE_ID;
        return uuidv4();
    }

    nodeUniqueIdState(comps:any[] = [], index) {
        // let len = comps.length;
        // let nodes = [];
        // for(let i=0;i<len;i++) {
        //     let element = comps[i];
        //     for(let j=0;j<element.nodeDTOs.length;j++) {
        //         let item = element.nodeDTOs[j];
        //         nodes.push(item);
        //     }
        // }
        // let currentMaxId = maxBy(cloneDeep(nodes), 'uniqueId');
        // let nextId = ++currentMaxId['uniqueId'] + index;
        // return nextId || this.NODE_UNIQUE_ID;
        return uuidv4();
    }
}
