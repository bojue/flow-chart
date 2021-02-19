import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class JsonSchemaService {

  constructor() { }

  getJsonByElements(eles:any[]) {
    let len = eles.length;
    let elements = [];
    for(let i=0;i<len;i++) {
      elements.push(this._getElement(eles[i]))
    }
    return elements;
  }

  _getElement(element:any) {
    let {
      uniqueId,
      elementId,
      expression,
      linkElementConfigId,
      linkConfigId,
      nodeDTOs,
      positionLeft,
      positionTop
    } = element;

    let elementJson = {
      uniqueId,
      elementId,
      expression,
      linkElementConfigId,
      linkConfigId,
      nodeDTOs,
      positionLeft,
      positionTop
    }
    elementJson.nodeDTOs = this._getNodes(nodeDTOs)
    return elementJson;
  }

  _getNodes(nodes:any[]) {
    if(!Array.isArray(nodes)) return [];
    let len = nodes.length;
    let nodeList = [];
    for(let i=0;i<len;i++) {
      nodeList.push( this._getNode(nodes[i]))
    }
    return nodeList;
  }

  _getNode(node:any) {
    let {
      uniqueId,
      nodeId,
      linkElementConfigId,
      nodeDirection,
      nodeType,
      nodeIndex,
      nodeTag,
      expression,
      segmentDTOs
    } = node;

    let nodeJson = {
      uniqueId,
      nodeId,
      linkElementConfigId,
      nodeDirection,
      nodeType,
      nodeIndex,
      nodeTag,
      expression,
      segmentDTOs
    }
    nodeJson['segmentDTOs']  = this._getSegments(nodeJson.segmentDTOs)
    return nodeJson;
  }

  _getSegments(links) {
    if(!Array.isArray(links)) return [];
    let len = links.length;
    let linkList = [];
    for(let i=0;i<len;i++) {
      linkList.push( this._getSegment(links[i]))
    }
    return linkList;
  }

  _getSegment(link:any) {
    let {
      segmentId,
      inputLinkElementConfigId,
      inputNodeId,
      inputNodeUniqueId,
      outputLinkElementConfigId,
      outputNodeId,
      outputNodeUniqueId,
    } = link;

    let segmentJson = {
      segmentId,
      inputLinkElementConfigId,
      inputNodeId,
      inputNodeUniqueId,
      outputLinkElementConfigId,
      outputNodeId,
      outputNodeUniqueId,
    }
    return segmentJson;
  }
}


