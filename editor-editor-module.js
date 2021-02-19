(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor-editor-module"],{

/***/ "/LU8":
/*!**************************************************************************!*\
  !*** ./src/app/editor/core/provider/dynamic-create-comp-init.service.ts ***!
  \**************************************************************************/
/*! exports provided: DynamicCreateCompInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicCreateCompInitService", function() { return DynamicCreateCompInitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loadsh */ "gbCW");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_1__);



class DynamicCreateCompInitService {
    constructor() {
        this.COMP_MODE_DATA_JSON = {
            "uniqueId": 0,
            "linkElementConfigId": null,
            "linkConfigId": 0,
            "elementId": 0,
            "positionTop": 0,
            "positionLeft": 0,
            "expression": "5",
            "nodeDTOs": [
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
        };
    }
    initDataObject(type) {
        let compJsonSchame = {
            node: this.COMP_MODE_DATA_JSON
        };
        // 深度
        return loadsh__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](compJsonSchame[type]);
    }
}
DynamicCreateCompInitService.ɵfac = function DynamicCreateCompInitService_Factory(t) { return new (t || DynamicCreateCompInitService)(); };
DynamicCreateCompInitService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicCreateCompInitService, factory: DynamicCreateCompInitService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicCreateCompInitService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/Ww8":
/*!*************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/comps-libs.module.ts ***!
  \*************************************************************/
/*! exports provided: CompsLibsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompsLibsModule", function() { return CompsLibsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _no_match_no_match_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-match/no-match.component */ "ivTg");
/* harmony import */ var _comps_elements_element_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/elements/element.component */ "4vEP");
/* harmony import */ var _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/basic/basic.component */ "1hZH");
/* harmony import */ var _comps_line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/line/line.component */ "m+F4");







const nodeComps = [
    _comps_elements_element_component__WEBPACK_IMPORTED_MODULE_3__["ElementComponent"],
    _no_match_no_match_component__WEBPACK_IMPORTED_MODULE_2__["NoMatchComponent"],
    _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"],
    _comps_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"],
];
class CompsLibsModule {
}
CompsLibsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompsLibsModule });
CompsLibsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompsLibsModule_Factory(t) { return new (t || CompsLibsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompsLibsModule, { declarations: [_comps_elements_element_component__WEBPACK_IMPORTED_MODULE_3__["ElementComponent"],
        _no_match_no_match_component__WEBPACK_IMPORTED_MODULE_2__["NoMatchComponent"],
        _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"],
        _comps_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_comps_elements_element_component__WEBPACK_IMPORTED_MODULE_3__["ElementComponent"],
        _no_match_no_match_component__WEBPACK_IMPORTED_MODULE_2__["NoMatchComponent"],
        _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"],
        _comps_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompsLibsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    [...nodeComps]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                entryComponents: [
                    [...nodeComps]
                ],
                exports: [
                    [...nodeComps]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "1hZH":
/*!***********************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/basic/basic/basic.component.ts ***!
  \***********************************************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loadsh */ "gbCW");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_1__);




class BasicComponent {
    constructor() {
        this.isActiveBool = false;
        this.onChildComponentChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
    }
    ngAfterContentChecked() {
        if (this.compJsonSchame) {
            this.getNodesPostion(this.compJsonSchame['nodeDTOs']);
        }
    }
    getCompActiveState() {
        if (this.compJsonSchame) {
            this.isActiveBool = this.compJsonSchame.active;
        }
    }
    appendPixel(param, obj = this.compJsonSchame) {
        if (!obj)
            return false;
        return (param in obj) && obj[param] + 'px';
    }
    // 操作元素
    controlComp(event) {
        event.stopPropagation();
        let item = {
            e: event,
            type: 'element',
            data: this.compJsonSchame
        };
        this.onChildComponentChange.emit(item);
    }
    // 操作节点
    controlNode(event, state, nodeData) {
        event.stopPropagation();
        let item = {
            e: event,
            type: 'node',
            state: state,
            nodeData: nodeData,
            data: this.compJsonSchame
        };
        this.onChildComponentChange.emit(item);
    }
    // 获取节点数据
    getNodesPostion(nodes, state) {
        let nodeObjs = loadsh__WEBPACK_IMPORTED_MODULE_1__["groupBy"](nodes, 'nodeDirection');
        this.getNodesPostionByDirection(nodes, nodeObjs['left'], 'left');
        this.getNodesPostionByDirection(nodes, nodeObjs['right'], 'right');
    }
    getNodesPostionByDirection(nodes, list, direction = 'right' || false) {
        let len = list.length;
        let perY = 20;
        let startY = len % 2 === 0 ? -perY * (len / 2) + 20 : -perY * (len / 2) + 20;
        for (let i = 0; i < len; i++) {
            let node = list[i];
            node['y'] = startY + i * perY;
            let nodeData = loadsh__WEBPACK_IMPORTED_MODULE_1__["find"](nodes, {
                uniqueId: node.uniqueId
            });
            if (nodeData) {
                nodeData['y'] = node['y'];
            }
        }
        this.compJsonSchame['nodeDTOs'][direction] = list;
    }
}
BasicComponent.ɵfac = function BasicComponent_Factory(t) { return new (t || BasicComponent)(); };
BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicComponent, selectors: [["app-basic"]], inputs: { compJsonSchame: "compJsonSchame" }, outputs: { onChildComponentChange: "onChildComponentChange" }, decls: 2, vars: 0, template: function BasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "basic works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic',
                templateUrl: './basic.component.html',
                styleUrls: ['./basic.component.scss']
            }]
    }], function () { return []; }, { compJsonSchame: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChildComponentChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "4vEP":
/*!****************************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/comps/elements/element.component.ts ***!
  \****************************************************************************/
/*! exports provided: ElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementComponent", function() { return ElementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic/basic/basic.component */ "1hZH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0, a1) { return { nextNodeActive: a0, befNodeActive: a1 }; };
const _c1 = function (a0) { return { top: a0 }; };
function ElementComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ElementComponent_div_0_span_4_Template_span_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const node_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.controlNode($event, "input", node_r3); })("drag", function ElementComponent_div_0_span_4_Template_span_drag_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const node_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.controlNode($event, "input", node_r3); })("dragend", function ElementComponent_div_0_span_4_Template_span_dragend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const node_r3 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.controlNode($event, "input", node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, node_r3.nextNodeactive, node_r3.befNodeActive))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r1.appendPixel("y", node_r3)));
} }
function ElementComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragstart", function ElementComponent_div_0_span_6_Template_span_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const node_r9 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.controlNode($event, "output", node_r9); })("drag", function ElementComponent_div_0_span_6_Template_span_drag_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const node_r9 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.controlNode($event, "output", node_r9); })("dragend", function ElementComponent_div_0_span_6_Template_span_dragend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const node_r9 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.controlNode($event, "output", node_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r9 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, node_r9.nextNodeactive, node_r9.befNodeActive))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.appendPixel("y", node_r9)));
} }
const _c2 = function (a0) { return { active: a0 }; };
const _c3 = function (a0, a1) { return { top: a0, left: a1 }; };
function ElementComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ElementComponent_div_0_Template_div_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.controlComp($event); })("dragstart", function ElementComponent_div_0_Template_div_dragstart_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.controlComp($event); })("dragend", function ElementComponent_div_0_Template_div_dragend_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.controlComp($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ElementComponent_div_0_span_4_Template, 1, 7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ElementComponent_div_0_span_6_Template, 1, 7, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx_r0.compJsonSchame && ctx_r0.compJsonSchame.active))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c3, ctx_r0.appendPixel("positionTop"), ctx_r0.appendPixel("positionLeft")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.compJsonSchame && ctx_r0.compJsonSchame.expression.name || "\u5143\u7D20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.compJsonSchame["nodeDTOs"]["left"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.compJsonSchame["nodeDTOs"]["right"]);
} }
class ElementComponent extends _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_1__["BasicComponent"] {
    constructor() {
        super();
        this.width = 100;
        this.height = 30;
    }
    ngOnInit() {
        this.getCompActiveState();
    }
    drawLine() {
    }
}
ElementComponent.ɵfac = function ElementComponent_Factory(t) { return new (t || ElementComponent)(); };
ElementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ElementComponent, selectors: [["app-element"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "libs-node", "draggable", "true", 3, "ngClass", "ngStyle", "click", "dragstart", "dragend", 4, "ngIf"], ["draggable", "true", 1, "libs-node", 3, "ngClass", "ngStyle", "click", "dragstart", "dragend"], [1, "name"], [1, "bef-nodes"], ["class", "bef-node node", "draggable", "true", 3, "ngClass", "ngStyle", "dragstart", "drag", "dragend", 4, "ngFor", "ngForOf"], [1, "next-nodes"], ["class", "next-node node", "draggable", "true", 3, "ngClass", "ngStyle", "dragstart", "drag", "dragend", 4, "ngFor", "ngForOf"], ["draggable", "true", 1, "bef-node", "node", 3, "ngClass", "ngStyle", "dragstart", "drag", "dragend"], ["draggable", "true", 1, "next-node", "node", 3, "ngClass", "ngStyle", "dragstart", "drag", "dragend"]], template: function ElementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ElementComponent_div_0_Template, 7, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.compJsonSchame);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n  font-size: 14px;\n  position: absolute;\n  border: 1px solid rgba(73, 136, 254, 0.5);\n  height: 30px;\n  width: 60px;\n  line-height: 30px;\n  text-align: center;\n  cursor: move;\n}\n[_nghost-%COMP%]   .libs-node.active[_ngcontent-%COMP%] {\n  border: 2px solid #4988fe;\n}\n[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 4px 10px;\n}\n[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .bef-node[_ngcontent-%COMP%], [_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .next-node[_ngcontent-%COMP%] {\n  cursor: crosshair;\n  position: absolute;\n  right: -20px;\n  top: 10px;\n  border-radius: 50px;\n  width: 10px;\n  height: 10px;\n  border: 1px solid #4988fe;\n  background: white;\n}\n[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .bef-node[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .next-node[_ngcontent-%COMP%]:hover {\n  background: greenyellow;\n}\n[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .bef-node[_ngcontent-%COMP%] {\n  left: -20px;\n}\n[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .nextNodeActive[_ngcontent-%COMP%] {\n  background: red;\n  border: 1px solid red;\n}\n[_nghost-%COMP%]   .libs-node[_ngcontent-%COMP%]   .befNodeActive[_ngcontent-%COMP%] {\n  background: greenyellow;\n  border: 1px solid #4988fe;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  position: absolute;\n  background: aliceblue;\n  left: -18px;\n  z-index: -2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxlbGVtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBSUEsWUFBQTtBQUhSO0FBQVE7RUFDSSx5QkFBQTtBQUVaO0FBQ1E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFDWjtBQUVRO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFBWjtBQUNZO0VBQ0ksdUJBQUE7QUFDaEI7QUFHUTtFQUNJLFdBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtFQUNBLHFCQUFBO0FBRlo7QUFJUTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUFGWjtBQU1JO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBSlIiLCJmaWxlIjoiZWxlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIC5saWJzLW5vZGUge1xyXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3MywgMTM2LCAyNTQsIDAuNSk7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAmLmFjdGl2ZXtcclxuICAgICAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjNDk4OGZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJzb3I6IG1vdmU7XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmVmLW5vZGUsIC5uZXh0LW5vZGUge1xyXG4gICAgICAgICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogLTIwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ5ODhmZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iZWYtbm9kZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5leHROb2RlQWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJlZk5vZGVBY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbnllbGxvdztcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjNDk4OGZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBhbGljZWJsdWU7XHJcbiAgICAgICAgbGVmdDogLTE4cHg7XHJcbiAgICAgICAgei1pbmRleDogLTI7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-element',
                templateUrl: './element.component.html',
                styleUrls: ['./element.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "9Wqj":
/*!****************************************************************!*\
  !*** ./src/app/editor/core/provider/uniqueid-state.service.ts ***!
  \****************************************************************/
/*! exports provided: CompUniqueIdStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompUniqueIdStateService", function() { return CompUniqueIdStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "4USb");



class CompUniqueIdStateService {
    constructor() {
        this.ELEMENT_UNIQUE_ID = 10000;
        this.NODE_UNIQUE_ID = 40000;
        this.LINE_UNIQUE_ID = 60000;
    }
    elementUniqueIdState(comps = []) {
        // let len = comps.length;
        // if(!len) return this.ELEMENT_UNIQUE_ID;
        // let currentMaxId = maxBy(cloneDeep(comps), 'uniqueId');
        // let nextId = ++currentMaxId['uniqueId'];
        // return nextId || this.ELEMENT_UNIQUE_ID;
        return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    }
    nodeUniqueIdState(comps = [], index) {
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
        return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
    }
}
CompUniqueIdStateService.ɵfac = function CompUniqueIdStateService_Factory(t) { return new (t || CompUniqueIdStateService)(); };
CompUniqueIdStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompUniqueIdStateService, factory: CompUniqueIdStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompUniqueIdStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ALb8":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/content-ref-host.directive */ "HQmb");
/* harmony import */ var _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/editor-core.module */ "aLu2");
/* harmony import */ var _components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/editor-content/editor-content.component */ "iQFE");
/* harmony import */ var _components_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/node-signal/node-signal.component */ "e8ou");
/* harmony import */ var _providers_json_schema_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./providers/json-schema.service */ "R89P");
/* harmony import */ var _components_json_schema_json_schema_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/json-schema/json-schema.component */ "KSow");











const routes = [
    {
        path: '',
        component: _components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__["EditorContentComponent"]
    }
];
class EditorModule {
}
EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(); }, providers: [
        _providers_json_schema_service__WEBPACK_IMPORTED_MODULE_7__["JsonSchemaService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__["EditorCoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__["EditorContentComponent"],
        _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ContentRefHostDirective"],
        _components_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_6__["NodeSignalComponent"],
        _components_json_schema_json_schema_component__WEBPACK_IMPORTED_MODULE_8__["JsonSchemaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__["EditorCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__["EditorContentComponent"],
                    _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ContentRefHostDirective"],
                    _components_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_6__["NodeSignalComponent"],
                    _components_json_schema_json_schema_component__WEBPACK_IMPORTED_MODULE_8__["JsonSchemaComponent"]
                ],
                exports: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__["EditorCoreModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                providers: [
                    _providers_json_schema_service__WEBPACK_IMPORTED_MODULE_7__["JsonSchemaService"]
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HQmb":
/*!*****************************************************************!*\
  !*** ./src/app/editor/directives/content-ref-host.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ContentRefHostDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRefHostDirective", function() { return ContentRefHostDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContentRefHostDirective {
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
ContentRefHostDirective.ɵfac = function ContentRefHostDirective_Factory(t) { return new (t || ContentRefHostDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
ContentRefHostDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ContentRefHostDirective, selectors: [["", "appContentRefHost", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentRefHostDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appContentRefHost]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "HS1K":
/*!***********************************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/basic/basic-style/basic-style.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BasicStyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicStyleComponent", function() { return BasicStyleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BasicStyleComponent {
    constructor() { }
    ngOnInit() {
    }
}
BasicStyleComponent.ɵfac = function BasicStyleComponent_Factory(t) { return new (t || BasicStyleComponent)(); };
BasicStyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BasicStyleComponent, selectors: [["app-basic-style"]], decls: 2, vars: 0, template: function BasicStyleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "basic-style works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy1zdHlsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicStyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-basic-style',
                templateUrl: './basic-style.component.html',
                styleUrls: ['./basic-style.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KSow":
/*!************************************************************************!*\
  !*** ./src/app/editor/components/json-schema/json-schema.component.ts ***!
  \************************************************************************/
/*! exports provided: JsonSchemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaComponent", function() { return JsonSchemaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function JsonSchemaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.jsonSchemaString);
} }
function JsonSchemaComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class JsonSchemaComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.jsonSchemaString = JSON.stringify(this.jsonSchema);
    }
    close() {
        this.activeModal.dismiss();
    }
}
JsonSchemaComponent.ɵfac = function JsonSchemaComponent_Factory(t) { return new (t || JsonSchemaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
JsonSchemaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JsonSchemaComponent, selectors: [["app-json-schema"]], decls: 8, vars: 2, consts: [[1, "json-schema"], [1, "title"], [1, "tit"], ["src", "./../../../../assets/imgs/close.svg", "alt", "", 1, "icon", 3, "click"], ["id", "content"], ["class", "values", 4, "ngIf"], [1, "values"], ["src", "./../../../../assets/imgs/nodata.svg", "alt", "", 1, "node-data"]], template: function JsonSchemaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " JSONSCHEMA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JsonSchemaComponent_Template_img_click_4_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JsonSchemaComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JsonSchemaComponent_div_7_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jsonSchema.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.jsonSchema.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".json-schema[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 600px;\n}\n.json-schema[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  height: 50px;\n  line-height: 50px;\n  font-size: 20px;\n  border-bottom: 1px solid #dddddd;\n}\n.json-schema[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4988fe;\n  margin: 3px 10px;\n}\n.json-schema[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  width: 30px;\n  top: 10px;\n}\n.json-schema[_ngcontent-%COMP%]   #content[_ngcontent-%COMP%] {\n  margin: 5px 10px;\n  height: 500px;\n  background: aliceblue;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.json-schema[_ngcontent-%COMP%]   .json-ele[_ngcontent-%COMP%] {\n  font-size: 12px;\n  display: inline-block;\n  height: 20px;\n  width: 90%;\n  line-height: 20px;\n}\n.json-schema[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  display: contents;\n}\n.json-schema[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   .key[_ngcontent-%COMP%] {\n  color: red;\n}\n.json-schema[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   .spe[_ngcontent-%COMP%] {\n  color: #4988fe;\n  margin-left: 4px;\n  margin-right: 4px;\n}\n.json-schema[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]   .val[_ngcontent-%COMP%] {\n  color: green;\n}\n.json-schema[_ngcontent-%COMP%]   .values[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.json-schema[_ngcontent-%COMP%]   .node-data[_ngcontent-%COMP%] {\n  transform: translateX(-50%);\n  position: absolute;\n  left: 50%;\n  top: 24%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcanNvbi1zY2hlbWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFHWjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFHWjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUNJO0VBQ0ksaUJBQUE7QUFDUjtBQUFRO0VBQ0ksVUFBQTtBQUVaO0FBQVE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUVaO0FBQVE7RUFDSSxZQUFBO0FBRVo7QUFDSTtFQUNJLHFCQUFBO0FBQ1I7QUFDSTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtBQUNSIiwiZmlsZSI6Impzb24tc2NoZW1hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpzb24tc2NoZW1hIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZGRkZDtcclxuICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IzQ5ODhmZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAzcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNjb250ZW50IHtcclxuICAgICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYWxpY2VibHVlO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLmpzb24tZWxlIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHByZSB7XHJcbiAgICAgICAgZGlzcGxheTogY29udGVudHM7XHJcbiAgICAgICAgLmtleSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zcGUge1xyXG4gICAgICAgICAgICBjb2xvcjojNDk4OGZlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnZhbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudmFsdWVzIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAubm9kZS1kYXRhIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0b3A6IDI0JTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonSchemaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-json-schema',
                templateUrl: './json-schema.component.html',
                styleUrls: ['./json-schema.component.scss']
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "R89P":
/*!*********************************************************!*\
  !*** ./src/app/editor/providers/json-schema.service.ts ***!
  \*********************************************************/
/*! exports provided: JsonSchemaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonSchemaService", function() { return JsonSchemaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class JsonSchemaService {
    constructor() { }
    getJsonByElements(eles) {
        let len = eles.length;
        let elements = [];
        for (let i = 0; i < len; i++) {
            elements.push(this._getElement(eles[i]));
        }
        return elements;
    }
    _getElement(element) {
        let { uniqueId, elementId, expression, linkElementConfigId, linkConfigId, nodeDTOs, positionLeft, positionTop } = element;
        let elementJson = {
            uniqueId,
            elementId,
            expression,
            linkElementConfigId,
            linkConfigId,
            nodeDTOs,
            positionLeft,
            positionTop
        };
        elementJson.nodeDTOs = this._getNodes(nodeDTOs);
        return elementJson;
    }
    _getNodes(nodes) {
        if (!Array.isArray(nodes))
            return [];
        let len = nodes.length;
        let nodeList = [];
        for (let i = 0; i < len; i++) {
            nodeList.push(this._getNode(nodes[i]));
        }
        return nodeList;
    }
    _getNode(node) {
        let { uniqueId, nodeId, linkElementConfigId, nodeDirection, nodeType, nodeIndex, nodeTag, expression, segmentDTOs } = node;
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
        };
        nodeJson['segmentDTOs'] = this._getSegments(nodeJson.segmentDTOs);
        return nodeJson;
    }
    _getSegments(links) {
        if (!Array.isArray(links))
            return [];
        let len = links.length;
        let linkList = [];
        for (let i = 0; i < len; i++) {
            linkList.push(this._getSegment(links[i]));
        }
        return linkList;
    }
    _getSegment(link) {
        let { segmentId, inputLinkElementConfigId, inputNodeId, inputNodeUniqueId, outputLinkElementConfigId, outputNodeId, outputNodeUniqueId, } = link;
        let segmentJson = {
            segmentId,
            inputLinkElementConfigId,
            inputNodeId,
            inputNodeUniqueId,
            outputLinkElementConfigId,
            outputNodeId,
            outputNodeUniqueId,
        };
        return segmentJson;
    }
}
JsonSchemaService.ɵfac = function JsonSchemaService_Factory(t) { return new (t || JsonSchemaService)(); };
JsonSchemaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JsonSchemaService, factory: JsonSchemaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JsonSchemaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "aLu2":
/*!***************************************************!*\
  !*** ./src/app/editor/core/editor-core.module.ts ***!
  \***************************************************/
/*! exports provided: EditorCoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorCoreModule", function() { return EditorCoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _comps_libs_comps_libs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps-libs/comps-libs.module */ "/Ww8");
/* harmony import */ var _provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provider/dynamic-create-comp.service */ "vrK0");
/* harmony import */ var _provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provider/dynamic-create-comp-init.service */ "/LU8");
/* harmony import */ var _comps_libs_basic_basic_style_basic_style_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps-libs/basic/basic-style/basic-style.component */ "HS1K");
/* harmony import */ var _provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provider/uniqueid-state.service */ "9Wqj");








class EditorCoreModule {
}
EditorCoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorCoreModule });
EditorCoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorCoreModule_Factory(t) { return new (t || EditorCoreModule)(); }, providers: [
        _provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_3__["DynamicCreateCompService"],
        _provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_4__["DynamicCreateCompInitService"],
        _provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_6__["CompUniqueIdStateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _comps_libs_comps_libs_module__WEBPACK_IMPORTED_MODULE_2__["CompsLibsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorCoreModule, { declarations: [_comps_libs_basic_basic_style_basic_style_component__WEBPACK_IMPORTED_MODULE_5__["BasicStyleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _comps_libs_comps_libs_module__WEBPACK_IMPORTED_MODULE_2__["CompsLibsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorCoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _comps_libs_basic_basic_style_basic_style_component__WEBPACK_IMPORTED_MODULE_5__["BasicStyleComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _comps_libs_comps_libs_module__WEBPACK_IMPORTED_MODULE_2__["CompsLibsModule"],
                ],
                providers: [
                    _provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_3__["DynamicCreateCompService"],
                    _provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_4__["DynamicCreateCompInitService"],
                    _provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_6__["CompUniqueIdStateService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "e8ou":
/*!************************************************************************!*\
  !*** ./src/app/editor/components/node-signal/node-signal.component.ts ***!
  \************************************************************************/
/*! exports provided: NodeSignalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeSignalComponent", function() { return NodeSignalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function NodeSignalComponent_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragend", function NodeSignalComponent_li_2_ul_3_li_1_Template_span_dragend_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const sub_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.dragCreateComp($event, sub_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r5.name);
} }
function NodeSignalComponent_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NodeSignalComponent_li_2_ul_3_li_1_Template, 4, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.child);
} }
function NodeSignalComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NodeSignalComponent_li_2_ul_3_Template, 2, 1, "ul", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.child && item_r1.child.length);
} }
class NodeSignalComponent {
    constructor() {
        this.createComp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayComp = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.datas = [{
                id: 1,
                name: "Elements",
                type: 'type',
                child: [{
                        id: 1,
                        name: "Ele-1",
                        type: 'element'
                    }, {
                        id: 2,
                        name: "Ele-2",
                        type: 'element'
                    }, {
                        id: 3,
                        name: "Ele-3",
                        type: 'element'
                    }, {
                        id: 4,
                        name: "Ele-4",
                        type: 'element'
                    }
                ]
            }];
    }
    dragCreateComp(event, item) {
        let compData = {
            event: event,
            expression: item
        };
        this.createComp.emit(compData);
    }
}
NodeSignalComponent.ɵfac = function NodeSignalComponent_Factory(t) { return new (t || NodeSignalComponent)(); };
NodeSignalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeSignalComponent, selectors: [["app-node-signal"]], outputs: { createComp: "createComp", displayComp: "displayComp" }, decls: 3, vars: 1, consts: [[1, "node-signal"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "name"], ["class", "sub-list", 4, "ngIf"], [1, "sub-list"], ["class", "sub-item", 4, "ngFor", "ngForOf"], [1, "sub-item"], [1, "line"], ["draggable", "true", 1, "sub-name", "dragBool", 3, "dragend"]], template: function NodeSignalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NodeSignalComponent_li_2_Template, 4, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.datas);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  -webkit-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 14px;\n  height: 32px;\n  line-height: 32px;\n  color: #555555;\n  border-bottom: 1px solid #cccccc;\n}\n[_nghost-%COMP%]   .title[_ngcontent-%COMP%]   .tit[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin: 0px 10px;\n}\n[_nghost-%COMP%]   .dragBool[_ngcontent-%COMP%] {\n  cursor: move;\n}\n[_nghost-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n}\n[_nghost-%COMP%]   .list[_ngcontent-%COMP%] {\n  font-size: 14px;\n  margin: 10px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 26px;\n  line-height: 26px;\n  border: 1px solid rgba(73, 136, 254, 0.5);\n}\n[_nghost-%COMP%]   .sub-list[_ngcontent-%COMP%] {\n  border-left: 1px dashed #e5e5e5;\n  margin-left: 20px;\n  font-size: 12px;\n}\n[_nghost-%COMP%]   .sub-list[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%] {\n  margin: 2px 0;\n  position: relative;\n}\n[_nghost-%COMP%]   .sub-list[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20px;\n  border-bottom: 1px dashed #e5e5e5;\n  left: 0px;\n  top: 16px;\n}\n[_nghost-%COMP%]   .sub-list[_ngcontent-%COMP%]   .sub-name[_ngcontent-%COMP%] {\n  padding: 1px 10px;\n  border: 1px solid rgba(73, 136, 254, 0.5);\n  margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbm9kZS1zaWduYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHSSx5QkFBQTtVQUFBLGlCQUFBO0FBREo7QUFFSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0NBQUE7QUFBUjtBQUNRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUNaO0FBRUk7RUFDSSxZQUFBO0FBQVI7QUFFSTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUFSO0FBRUk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0E5QkU7QUE4QmQ7QUFJSTtFQUNJLCtCQWxDUztFQW1DVCxpQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUdRO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBRFo7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQTNDQztFQTRDRCxTQUFBO0VBQ0EsU0FBQTtBQUFoQjtBQUdRO0VBQ0ksaUJBQUE7RUFDQSx5Q0FuREU7RUFvREYsaUJBQUE7QUFEWiIsImZpbGUiOiJub2RlLXNpZ25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgICRib3JkZXI6ICAxcHggc29saWQgcmdiYSg3MywxMzYsMjU0LCAwLjUpO1xyXG4gICAgJGJvcmRlci1saW5lOjFweCBkYXNoZWQjZTVlNWU1O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgY29sb3I6IzU1NTU1NTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjY2NjYztcclxuICAgICAgICAudGl0IHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZHJhZ0Jvb2wge1xyXG4gICAgICAgIGN1cnNvcjogbW92ZTtcclxuICAgIH1cclxuICAgIHVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubGlzdCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4OyBcclxuICAgICAgICAgICAgYm9yZGVyOiAkYm9yZGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3ViLWxpc3Qge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAgJGJvcmRlci1saW5lO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAuc3ViLWl0ZW0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogICRib3JkZXItbGluZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3ViLW5hbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggMTBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiAgJGJvcmRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeSignalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-node-signal',
                templateUrl: './node-signal.component.html',
                styleUrls: ['./node-signal.component.scss']
            }]
    }], function () { return []; }, { createComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], displayComp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "iQFE":
/*!******************************************************************************!*\
  !*** ./src/app/editor/components/editor-content/editor-content.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditorContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorContentComponent", function() { return EditorContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/content-ref-host.directive */ "HQmb");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! loadsh */ "gbCW");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_comps_libs_comps_line_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/comps-libs/comps/line/line.component */ "m+F4");
/* harmony import */ var _json_schema_json_schema_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../json-schema/json-schema.component */ "KSow");
/* harmony import */ var _core_provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/provider/dynamic-create-comp.service */ "vrK0");
/* harmony import */ var _core_provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/provider/dynamic-create-comp-init.service */ "/LU8");
/* harmony import */ var _core_provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/provider/uniqueid-state.service */ "9Wqj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _providers_json_schema_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/json-schema.service */ "R89P");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../node-signal/node-signal.component */ "e8ou");














function EditorContentComponent_ng_template_6_Template(rf, ctx) { }
class EditorContentComponent {
    constructor(componentFactoryResolver, dynamicCreateCompService, initCompDataService, uniqueidStateService, eventManager, jsonSchemaService, modal) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dynamicCreateCompService = dynamicCreateCompService;
        this.initCompDataService = initCompDataService;
        this.uniqueidStateService = uniqueidStateService;
        this.eventManager = eventManager;
        this.jsonSchemaService = jsonSchemaService;
        this.modal = modal;
        this.compDefType = 'node';
    }
    ngOnInit() {
        this.initData();
    }
    initData() {
        this.activeCompState_index = 0;
        this.currentPageNodes = [];
        this.jsonScheme = [];
    }
    ngAfterContentInit() {
        this.currentViewContRef = this.viewContRef.viewContainerRef;
        this.initRendeComps();
        this.initRenderLineComp();
        this.addLister();
    }
    addLister() {
        this.eventManager.addGlobalEventListener('window', 'keydown', event => {
            if (event.code === 'Delete') {
                loadsh__WEBPACK_IMPORTED_MODULE_2__["remove"](this.currentPageNodes, node => {
                    return node.active === true;
                });
                this.reRenderComp();
                this.activeCompState_index = -1;
            }
        });
    }
    reRenderComp() {
        let len = this.currentPageNodes.length;
        for (let i = 0; i < len; i++) {
            this.currentViewContRef.clear(i);
        }
        this.initRendeComps();
        this.initRenderLineComp();
    }
    ngAfterContentChecked() {
    }
    getContentBoundingClinetRect() {
        let dom = document.getElementById("content");
        let rect = dom.getBoundingClientRect();
        return rect;
    }
    creatCompByDrag(createCompData) {
        this.initState();
        let expressionData = createCompData.expression;
        let event = createCompData.event;
        this.addComponent(event, expressionData);
    }
    // 通过拖拽创建新组件
    addComponent(event, expressionData, compType = this.compDefType) {
        let _compType = compType; // 获取创建组件的类型
        let addCompJsonData = this.initCompDataService.initDataObject(_compType);
        if (event) {
            this.initPagesCompState();
            let domContentRect = this.getContentBoundingClinetRect();
            addCompJsonData['positionLeft'] = event.clientX - domContentRect.x;
            addCompJsonData['positionTop'] = event.clientY - domContentRect.y;
            addCompJsonData['expression'] = expressionData;
            // update state
            addCompJsonData['active'] = true;
            addCompJsonData['uniqueId'] = this.uniqueidStateService.elementUniqueIdState(this.currentPageNodes);
            let nodeLen = addCompJsonData.nodeDTOs.length;
            for (let i = 0; i < nodeLen; i++) {
                let node = addCompJsonData.nodeDTOs[i];
                node.uniqueId = this.uniqueidStateService.nodeUniqueIdState(this.currentPageNodes, i);
            }
        }
        this.currentPageNodes.push(addCompJsonData);
        this.activeCompState_index = this.currentPageNodes.length - 1;
        this.renderComponent(_compType);
    }
    initPagesCompState() {
        let len = this.currentPageNodes.length;
        for (let i = 0; i < len; i++) {
            let compJsonSchame = this.currentPageNodes[i];
            compJsonSchame.active = false;
        }
    }
    initRendeComps() {
        let len = this.currentPageNodes.length;
        console.log(this.currentPageNodes);
        for (let i = 0; i < len; i++) {
            this.renderComponent('node', i);
        }
    }
    initRenderLineComp() {
        let comp = _core_comps_libs_comps_line_line_component__WEBPACK_IMPORTED_MODULE_3__["LineComponent"];
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp);
        let compRef = this.currentViewContRef.createComponent(componentFactory);
        let compInstance = compRef.instance;
        compInstance.elements = this.currentPageNodes;
    }
    renderComponent(compType = 'node', currentIndex, componnet) {
        let compIndex = currentIndex || this.activeCompState_index;
        let compJsonSchame = this.currentPageNodes[compIndex];
        let comp = this.dynamicCreateCompService.getComponentByType(compType); // 声明一个组件
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(comp); // 实例化一个组价
        let compRef = this.currentViewContRef.createComponent(componentFactory); // 动态创建一个组件
        let compInstance = compRef.instance;
        compInstance.compJsonSchame = compJsonSchame;
        (compInstance).onChildComponentChange.subscribe(event => {
            if (event && event.data) {
                let type = event.type;
                if (type === 'element') {
                    this.elementComponentChange(event);
                }
                else if (type === 'node') {
                    this.nodeComponentChange(event);
                }
            }
        });
    }
    nodeComponentChange(event) {
        let domContentRect = this.getContentBoundingClinetRect();
        let _x = event.e.clientX - domContentRect.x;
        let _y = event.e.clientY - domContentRect.y;
        let _nodeData = event.nodeData;
        if (!_nodeData)
            return;
        let _direction = _nodeData.nodeDirection;
        let _currenComp = event.data;
        let elements = this.currentPageNodes;
        let len = elements.length;
        let eType = event.e.type;
        if (eType === 'dragstart') {
            _nodeData.befNodeActive = true;
        }
        else if (eType === 'dragend') {
            _nodeData.befNodeActive = false;
        }
        for (let i = 0; i < len; i++) {
            let element = elements[i];
            if (element['uniqueId'] === _currenComp['uniqueId']) {
                continue;
            }
            let _left = element['positionLeft'];
            let _top = element['positionTop'];
            let _pending = 10;
            let _nodes = loadsh__WEBPACK_IMPORTED_MODULE_2__["groupBy"](element.nodeDTOs, 'nodeDirection')[_direction === 'right' ? "left" : 'right'];
            let _len = _nodes.length;
            let _offsetY = 5;
            let _offsetX = 10;
            for (let i = 0; i < _len; i++) {
                let _node = _nodes[i];
                _top += _node.y;
                if (event.state === 'output') {
                    if (_x >= _left - _offsetX - _pending && _x <= _left - _offsetX + _pending && _y >= _top + _offsetY - _pending && _y <= _top + _offsetY + _pending) {
                        if (eType === 'dragend') {
                            _node.nextNodeactive = false;
                            if (_node) {
                                _node.y = _nodeData.y;
                            }
                            this.appendLine(_node, _nodeData, _nodeData.segmentDTOs);
                            return;
                        }
                        else {
                            _node.nextNodeactive = true;
                        }
                    }
                    else {
                        if (_node.nextNodeactive) {
                            _node.nextNodeactive = false;
                            break;
                        }
                    }
                }
                else if (event.state === 'input') {
                    let _width = 70;
                    _pending = 15;
                    if (_x >= _left - _offsetX + _width - _pending
                        && _x <= _left - _offsetX + _width + _pending
                        && _y >= _top + _offsetY - _pending
                        && _y <= _top + _offsetY + _pending) {
                        if (eType === 'dragend') {
                            _node.nextNodeactive = false;
                            if (_node) {
                                _node.y = _nodeData.y;
                            }
                            this.appendLine(_nodeData, _node, _node.segmentDTOs);
                            return;
                        }
                        else {
                            _node.nextNodeactive = true;
                        }
                    }
                    else {
                        if (_node.nextNodeactive) {
                            _node.nextNodeactive = false;
                        }
                    }
                }
            }
        }
    }
    appendLine(nextNode, befNode, segmentDTOs) {
        if (befNode && nextNode) {
            let line = {
                "segmentId": null,
                "inputLinkElementConfigId": null,
                "inputNodeId": null,
                "inputNodeUniqueId": befNode.uniqueId,
                "outputLinkElementConfigId": null,
                "outputNodeId": null,
                "outputNodeUniqueId": nextNode.uniqueId
            };
            segmentDTOs.push(line);
        }
    }
    elementComponentChange(event) {
        let compJson = event.data;
        this.initPagesCompState();
        let _eType = event.e.type;
        if (_eType === 'click') {
            this.activeCompState_drag_sx = event.e.clientX;
            this.activeCompState_drag_sy = event.e.clientY;
        }
        else if (_eType === 'dragstart') {
            this.activeCompState_drag_sx = event.e.clientX;
            this.activeCompState_drag_sy = event.e.clientY;
        }
        else if (_eType === 'dragend') {
            let _cx = event.e.clientX;
            let _cy = event.e.clientY;
            let _x = _cx - this.activeCompState_drag_sx;
            let _y = _cy - this.activeCompState_drag_sy;
            compJson['positionLeft'] += _x;
            compJson['positionTop'] += _y;
        }
        event.data.active = true;
    }
    initState() {
        this.activeCompState_index = -1;
    }
    drawNodeDTOs(compJsonSchame) {
        let nodeDTOs = compJsonSchame.nodeDTOs || [];
        let len = nodeDTOs.length;
        for (let i = 0; i < len; i++) {
            let nodeDTO = nodeDTOs[i];
            this.drawSegmentDTOs(nodeDTO);
        }
    }
    drawSegmentDTOs(nodeDTO) {
        let segmentDTOs = nodeDTO.segmentDTOs || [];
        let len = segmentDTOs.length;
        for (let i = 0; i < len; i++) {
            let segmentDTO = segmentDTOs[i];
            this.drawSegmentDTO(segmentDTOs);
        }
    }
    drawSegmentDTO(segment) {
    }
    showJSON() {
        let pageElements = loadsh__WEBPACK_IMPORTED_MODULE_2__["cloneDeep"](this.currentPageNodes);
        this.jsonScheme = this.jsonSchemaService.getJsonByElements(pageElements);
        this.openSchemaComp();
    }
    openSchemaComp() {
        let activeModal = this.modal.open(_json_schema_json_schema_component__WEBPACK_IMPORTED_MODULE_4__["JsonSchemaComponent"], {
            size: 'xl'
        });
        activeModal.componentInstance.jsonSchema = this.jsonScheme;
    }
}
EditorContentComponent.ɵfac = function EditorContentComponent_Factory(t) { return new (t || EditorContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_5__["DynamicCreateCompService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_6__["DynamicCreateCompInitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_7__["CompUniqueIdStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_providers_json_schema_service__WEBPACK_IMPORTED_MODULE_9__["JsonSchemaService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"])); };
EditorContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorContentComponent, selectors: [["app-editor-content"]], viewQuery: function EditorContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_1__["ContentRefHostDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContRef = _t.first);
    } }, decls: 8, vars: 0, consts: [[1, "content"], ["id", "jsonComp"], ["src", "./../../../../assets/imgs/json.svg", "alt", "json", "title", "jsonschema", 1, "icon", 3, "click"], ["id", "editor-content"], [1, "item", 3, "createComp"], ["id", "content", 1, "item", "content"], ["appContentRefHost", ""], ["contentComp", ""]], template: function EditorContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorContentComponent_Template_img_click_2_listener() { return ctx.showJSON(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-node-signal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("createComp", function EditorContentComponent_Template_app_node_signal_createComp_4_listener($event) { return ctx.creatCompByDrag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EditorContentComponent_ng_template_6_Template, 0, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_11__["NodeSignalComponent"], _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_1__["ContentRefHostDirective"]], styles: ["[_nghost-%COMP%]   #jsonComp[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -2px;\n  right: 85px;\n}\n[_nghost-%COMP%]   #jsonComp[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n}\n[_nghost-%COMP%]   #editor-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 20px;\n  min-width: 1000px;\n  min-height: 700px;\n  width: calc(100% - 200px);\n  display: grid;\n  grid-template-columns: 200px auto;\n  grid-column-gap: 5px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n[_nghost-%COMP%]   #editor-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n[_nghost-%COMP%]   #editor-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background: transparent;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdG9yLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNaO0FBRUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUNRO0VBRUksbUJBQUE7QUFBWjtBQUVRO0VBQ0ksdUJBQUE7RUFDQSxrQkFBQTtBQUFaIiwiZmlsZSI6ImVkaXRvci1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgI2pzb25Db21wIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOi0ycHg7XHJcbiAgICAgICAgcmlnaHQ6IDg1cHg7XHJcbiAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI2VkaXRvci1jb250ZW50IHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA1cHg7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6MXB4IHNvbGlkICNjY2NjY2M7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor-content',
                templateUrl: './editor-content.component.html',
                styleUrls: ['./editor-content.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _core_provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_5__["DynamicCreateCompService"] }, { type: _core_provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_6__["DynamicCreateCompInitService"] }, { type: _core_provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_7__["CompUniqueIdStateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"] }, { type: _providers_json_schema_service__WEBPACK_IMPORTED_MODULE_9__["JsonSchemaService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"] }]; }, { viewContRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_1__["ContentRefHostDirective"], { static: true }]
        }] }); })();


/***/ }),

/***/ "ivTg":
/*!***********************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/no-match/no-match.component.ts ***!
  \***********************************************************************/
/*! exports provided: NoMatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoMatchComponent", function() { return NoMatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NoMatchComponent {
    constructor() { }
    ngOnInit() {
    }
}
NoMatchComponent.ɵfac = function NoMatchComponent_Factory(t) { return new (t || NoMatchComponent)(); };
NoMatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoMatchComponent, selectors: [["app-no-match"]], decls: 2, vars: 0, template: function NoMatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "no-match works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuby1tYXRjaC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoMatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-no-match',
                templateUrl: './no-match.component.html',
                styleUrls: ['./no-match.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "m+F4":
/*!*********************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/comps/line/line.component.ts ***!
  \*********************************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! loadsh */ "gbCW");
/* harmony import */ var loadsh__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LineComponent__svg_path_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "path", 2);
} if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("d", line_r1.d);
} }
class LineComponent {
    constructor() { }
    ngOnInit() {
        this.initData();
        this.getData();
        this.appendLinesInfo();
    }
    ngAfterContentChecked() {
        this.initData();
        this.getData();
        this.appendLinesInfo();
    }
    initData() {
        this.nodeDTOs = [];
        this.segmentDTOs = [];
    }
    getData() {
        let len = this.elements.length;
        for (let i = 0; i < len; i++) {
            let element = this.elements[i];
            this.getNodeDTOs(element);
        }
    }
    getNodeDTOs(ele) {
        let nodeDTOs = ele['nodeDTOs'] || [];
        let len = nodeDTOs.length;
        for (let i = 0; i < len; i++) {
            let nodeDTO = nodeDTOs[i];
            nodeDTO['positionLeft'] = ele['positionLeft'];
            nodeDTO['positionTop'] = ele['positionTop'];
            this.nodeDTOs.push(nodeDTO);
            this.getSegmentDTOs(nodeDTO);
        }
    }
    getSegmentDTOs(nodeDTO) {
        let segmentDTOs = nodeDTO['segmentDTOs'] || [];
        let len = segmentDTOs.length;
        for (let i = 0; i < len; i++) {
            let segmentDTO = segmentDTOs[i];
            this.segmentDTOs.push(segmentDTO);
        }
    }
    appendLinesInfo() {
        let nodes = this.nodeDTOs;
        let lines_len = this.segmentDTOs.length;
        let segDTOs = this.segmentDTOs;
        for (let i = 0; i < lines_len; i++) {
            let line = segDTOs[i];
            let sNode = loadsh__WEBPACK_IMPORTED_MODULE_1__["find"](nodes, {
                uniqueId: line.inputNodeUniqueId
            });
            let eNode = loadsh__WEBPACK_IMPORTED_MODULE_1__["find"](nodes, {
                uniqueId: line.outputNodeUniqueId
            });
            if (!!sNode && !!eNode) {
                line['x1'] = sNode['positionLeft'] + 76;
                line['y1'] = sNode['positionTop'] + sNode.y + 8;
                line['x2'] = eNode['positionLeft'] - 12;
                line['y2'] = eNode['positionTop'] + eNode.y + 8;
                let _minddle_x = (line.x1 + line.x2) / 2;
                line['d'] = `M ${line.x1},${line.y1} C ${_minddle_x},${line.y1} ${_minddle_x},${line.y2} ${line.x2},${line.y2}`;
            }
            else {
                line['DelBool'] = true;
            }
        }
        loadsh__WEBPACK_IMPORTED_MODULE_1__["remove"](this.segmentDTOs, line => {
            return line.DelBool === true;
        });
    }
}
LineComponent.ɵfac = function LineComponent_Factory(t) { return new (t || LineComponent)(); };
LineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineComponent, selectors: [["app-line"]], decls: 2, vars: 1, consts: [["width", "1000px", "height", "700px", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["class", "line", "style", "stroke:#4988fe; stroke-width:1px;fill:none; ", 4, "ngFor", "ngForOf"], [1, "line", 2, "stroke", "#4988fe", "stroke-width", "1px", "fill", "none"]], template: function LineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LineComponent__svg_path_1_Template, 1, 1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.segmentDTOs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: -1;\n  left: 0;\n  position: absolute;\n  top: 0px;\n  width: 1200px;\n  height: 700px;\n  background: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQVIiLCJmaWxlIjoibGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6YWxpY2VibHVlO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line',
                templateUrl: './line.component.html',
                styleUrls: ['./line.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vrK0":
/*!*********************************************************************!*\
  !*** ./src/app/editor/core/provider/dynamic-create-comp.service.ts ***!
  \*********************************************************************/
/*! exports provided: DynamicCreateCompService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicCreateCompService", function() { return DynamicCreateCompService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _comps_libs_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../comps-libs/no-match/no-match.component */ "ivTg");
/* harmony import */ var _comps_libs_comps_elements_element_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps-libs/comps/elements/element.component */ "4vEP");




class DynamicCreateCompService {
    constructor() { }
    getComponentByType(type) {
        let comp;
        switch (type) {
            case 'node':
                comp = _comps_libs_comps_elements_element_component__WEBPACK_IMPORTED_MODULE_2__["ElementComponent"];
                break;
            default:
                comp = _comps_libs_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_1__["NoMatchComponent"];
        }
        return comp;
    }
    getDefultComponent() {
        return _comps_libs_no_match_no_match_component__WEBPACK_IMPORTED_MODULE_1__["NoMatchComponent"];
    }
}
DynamicCreateCompService.ɵfac = function DynamicCreateCompService_Factory(t) { return new (t || DynamicCreateCompService)(); };
DynamicCreateCompService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DynamicCreateCompService, factory: DynamicCreateCompService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DynamicCreateCompService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=editor-editor-module.js.map