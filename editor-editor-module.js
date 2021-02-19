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
/* harmony import */ var _comps_lines_line_line_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/lines/line/line.component */ "5fM+");
/* harmony import */ var _comps_lines_svg_canvas_svg_canvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/lines/svg-canvas/svg-canvas.component */ "gFul");








const nodeComps = [
    _comps_elements_element_component__WEBPACK_IMPORTED_MODULE_3__["ElementComponent"],
    _no_match_no_match_component__WEBPACK_IMPORTED_MODULE_2__["NoMatchComponent"],
    _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"],
    _comps_lines_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"],
    _comps_lines_svg_canvas_svg_canvas_component__WEBPACK_IMPORTED_MODULE_6__["SvgCanvasComponent"]
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
        _comps_lines_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"],
        _comps_lines_svg_canvas_svg_canvas_component__WEBPACK_IMPORTED_MODULE_6__["SvgCanvasComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_comps_elements_element_component__WEBPACK_IMPORTED_MODULE_3__["ElementComponent"],
        _no_match_no_match_component__WEBPACK_IMPORTED_MODULE_2__["NoMatchComponent"],
        _basic_basic_basic_component__WEBPACK_IMPORTED_MODULE_4__["BasicComponent"],
        _comps_lines_line_line_component__WEBPACK_IMPORTED_MODULE_5__["LineComponent"],
        _comps_lines_svg_canvas_svg_canvas_component__WEBPACK_IMPORTED_MODULE_6__["SvgCanvasComponent"]] }); })();
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

/***/ "5fM+":
/*!***************************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/comps/lines/line/line.component.ts ***!
  \***************************************************************************/
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
        let nodes = loadsh__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"](this.nodeDTOs);
        let lines_len = this.segmentDTOs.length;
        for (let i = 0; i < lines_len; i++) {
            let line = this.segmentDTOs[i];
            let sNode = loadsh__WEBPACK_IMPORTED_MODULE_1__["find"](nodes, {
                uniqueId: line.inputNodeUniqueId
            });
            let eNode = loadsh__WEBPACK_IMPORTED_MODULE_1__["find"](nodes, {
                uniqueId: line.outputNodeUniqueId
            });
            console.log(!!eNode, !!sNode);
            if (!!sNode && !!eNode) {
                line['x1'] = sNode['positionLeft'] + 76;
                line['y1'] = sNode['positionTop'] + sNode.y + 10;
                line['x2'] = eNode['positionLeft'] - 12;
                line['y2'] = eNode['positionTop'] + eNode.y + 10;
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  z-index: -1;\n  left: 0;\n  position: absolute;\n  top: 0px;\n  width: 1200px;\n  height: 700px;\n  background: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUFSIiwiZmlsZSI6ImxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBzdmcge1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOmFsaWNlYmx1ZTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line',
                templateUrl: './line.component.html',
                styleUrls: ['./line.component.scss']
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

/***/ "9c1k":
/*!****************************************************************************!*\
  !*** ./src/app/editor/components/node-stratrgy/node-stratrgy.component.ts ***!
  \****************************************************************************/
/*! exports provided: NodeStratrgyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeStratrgyComponent", function() { return NodeStratrgyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NodeStratrgyComponent {
    constructor() { }
    ngOnInit() {
    }
}
NodeStratrgyComponent.ɵfac = function NodeStratrgyComponent_Factory(t) { return new (t || NodeStratrgyComponent)(); };
NodeStratrgyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeStratrgyComponent, selectors: [["app-node-stratrgy"]], decls: 2, vars: 0, template: function NodeStratrgyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "node-stratrgy works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub2RlLXN0cmF0cmd5LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NodeStratrgyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-node-stratrgy',
                templateUrl: './node-stratrgy.component.html',
                styleUrls: ['./node-stratrgy.component.scss']
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
/* harmony import */ var _components_node_stratrgy_node_stratrgy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/node-stratrgy/node-stratrgy.component */ "9c1k");
/* harmony import */ var _components_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/node-signal/node-signal.component */ "e8ou");










const routes = [
    {
        path: '',
        component: _components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__["EditorContentComponent"]
    }
];
class EditorModule {
}
EditorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EditorModule });
EditorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EditorModule_Factory(t) { return new (t || EditorModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__["EditorCoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditorModule, { declarations: [_components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__["EditorContentComponent"],
        _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ContentRefHostDirective"],
        _components_node_stratrgy_node_stratrgy_component__WEBPACK_IMPORTED_MODULE_6__["NodeStratrgyComponent"],
        _components_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_7__["NodeSignalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__["EditorCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_editor_content_editor_content_component__WEBPACK_IMPORTED_MODULE_5__["EditorContentComponent"],
                    _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_3__["ContentRefHostDirective"],
                    _components_node_stratrgy_node_stratrgy_component__WEBPACK_IMPORTED_MODULE_6__["NodeStratrgyComponent"],
                    _components_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_7__["NodeSignalComponent"]
                ],
                exports: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _core_editor_core_module__WEBPACK_IMPORTED_MODULE_4__["EditorCoreModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
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



function NodeSignalComponent_li_5_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragend", function NodeSignalComponent_li_5_ul_3_li_1_Template_span_dragend_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const sub_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.dragCreateComp($event, sub_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_r5.name);
} }
function NodeSignalComponent_li_5_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NodeSignalComponent_li_5_ul_3_li_1_Template, 4, 1, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r1.child);
} }
function NodeSignalComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NodeSignalComponent_li_5_ul_3_Template, 2, 1, "ul", 7);
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
                name: "空调001",
                deviceId: 10001,
                type: 'device',
                child: [{
                        id: 1,
                        name: "温度",
                        currentVal: "23.8",
                        state: 0,
                        type: 'signal'
                    }, {
                        id: 2,
                        name: "湿度",
                        currentVal: "11",
                        state: 0,
                        type: 'signal'
                    }, {
                        id: 3,
                        name: "电压",
                        currentVal: "11",
                        state: 0,
                        type: 'signal'
                    }, {
                        id: 4,
                        name: "电流",
                        currentVal: "11",
                        state: 0,
                        type: 'signal'
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
NodeSignalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NodeSignalComponent, selectors: [["app-node-signal"]], outputs: { createComp: "createComp", displayComp: "displayComp" }, decls: 6, vars: 1, consts: [[1, "node-signal"], [1, "title"], [1, "tit"], [1, "list"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "name"], ["class", "sub-list", 4, "ngIf"], [1, "sub-list"], ["class", "sub-item", 4, "ngFor", "ngForOf"], [1, "sub-item"], [1, "line"], ["draggable", "true", 1, "sub-name", "dragBool", 3, "dragend"]], template: function NodeSignalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u8BBE\u5907\u5217\u8868 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NodeSignalComponent_li_5_Template, 4, 2, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
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

/***/ "gFul":
/*!***************************************************************************************!*\
  !*** ./src/app/editor/core/comps-libs/comps/lines/svg-canvas/svg-canvas.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SvgCanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgCanvasComponent", function() { return SvgCanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SvgCanvasComponent {
    constructor() { }
    ngOnInit() {
    }
}
SvgCanvasComponent.ɵfac = function SvgCanvasComponent_Factory(t) { return new (t || SvgCanvasComponent)(); };
SvgCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgCanvasComponent, selectors: [["app-svg-canvas"]], decls: 2, vars: 0, consts: [["width", "1000px", "height", "700px", "version", "1.1", "xmlns", "http://www.w3.org/2000/svg"], ["x1", "180", "y1", "115", "x2", "186", "y2", "315", 2, "stroke", "#4988fe", "stroke-width", "1px"]], template: function SvgCanvasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "line", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  background: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc3ZnLWNhbnZhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0FBQVIiLCJmaWxlIjoic3ZnLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDphbGljZWJsdWU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-svg-canvas',
                templateUrl: './svg-canvas.component.html',
                styleUrls: ['./svg-canvas.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _core_comps_libs_comps_lines_line_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/comps-libs/comps/lines/line/line.component */ "5fM+");
/* harmony import */ var _core_provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/provider/dynamic-create-comp.service */ "vrK0");
/* harmony import */ var _core_provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/provider/dynamic-create-comp-init.service */ "/LU8");
/* harmony import */ var _core_provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/provider/uniqueid-state.service */ "9Wqj");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../node-signal/node-signal.component */ "e8ou");
/* harmony import */ var _node_stratrgy_node_stratrgy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../node-stratrgy/node-stratrgy.component */ "9c1k");












function EditorContentComponent_ng_template_3_Template(rf, ctx) { }
class EditorContentComponent {
    constructor(componentFactoryResolver, dynamicCreateCompService, initCompDataService, uniqueidStateService, eventManager) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.dynamicCreateCompService = dynamicCreateCompService;
        this.initCompDataService = initCompDataService;
        this.uniqueidStateService = uniqueidStateService;
        this.eventManager = eventManager;
        this.compDefType = 'node';
    }
    ngOnInit() {
        this.initData();
    }
    initData() {
        this.activeCompState_index = 0;
        this.currentPageNodes = [{
                "uniqueId": 20,
                "linkElementConfigId": null,
                "linkConfigId": 0,
                "elementId": 0,
                "positionTop": 100,
                "positionLeft": 100,
                "expression": "5",
                "nodeDTOs": [
                    {
                        "uniqueId": 10000,
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
                        "uniqueId": 10001,
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
            }, {
                "uniqueId": 10,
                "linkElementConfigId": null,
                "linkConfigId": 0,
                "elementId": 0,
                "positionTop": 200,
                "positionLeft": 200,
                "expression": "5",
                "nodeDTOs": [
                    {
                        "uniqueId": 10002,
                        "nodeId": null,
                        "linkElementConfigId": null,
                        "nodeDirection": "right",
                        "nodeType": "custom",
                        "nodeIndex": 1,
                        "nodeTag": null,
                        "expression": null,
                        "segmentDTOs": []
                    }, {
                        "uniqueId": 10006,
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
                        "uniqueId": 10003,
                        "nodeId": null,
                        "linkElementConfigId": null,
                        "nodeDirection": "left",
                        "nodeType": "custom",
                        "nodeIndex": 1,
                        "nodeTag": null,
                        "expression": null,
                        "segmentDTOs": []
                    }, {
                        "uniqueId": 10004,
                        "nodeId": null,
                        "linkElementConfigId": null,
                        "nodeDirection": "left",
                        "nodeType": "custom",
                        "nodeIndex": 1,
                        "nodeTag": null,
                        "expression": null,
                        "segmentDTOs": []
                    }, {
                        "uniqueId": 10005,
                        "nodeId": null,
                        "linkElementConfigId": null,
                        "nodeDirection": "right",
                        "nodeType": "custom",
                        "nodeIndex": 1,
                        "nodeTag": null,
                        "expression": null,
                        "segmentDTOs": []
                    },
                ]
            }
        ];
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
        for (let i = 0; i < len; i++) {
            this.renderComponent('node', i);
        }
    }
    initRenderLineComp() {
        let comp = _core_comps_libs_comps_lines_line_line_component__WEBPACK_IMPORTED_MODULE_3__["LineComponent"];
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
            console.log(_direction, event.state);
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
        console.log(segment);
    }
}
EditorContentComponent.ɵfac = function EditorContentComponent_Factory(t) { return new (t || EditorContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_4__["DynamicCreateCompService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_5__["DynamicCreateCompInitService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_6__["CompUniqueIdStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"])); };
EditorContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorContentComponent, selectors: [["app-editor-content"]], viewQuery: function EditorContentComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_1__["ContentRefHostDirective"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.viewContRef = _t.first);
    } }, decls: 6, vars: 0, consts: [["id", "editor-content"], [1, "item", 3, "createComp"], ["id", "content", 1, "item", "content"], ["appContentRefHost", ""], ["contentComp", ""], [1, "item"]], template: function EditorContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-node-signal", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("createComp", function EditorContentComponent_Template_app_node_signal_createComp_1_listener($event) { return ctx.creatCompByDrag($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EditorContentComponent_ng_template_3_Template, 0, 0, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-node-stratrgy", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_node_signal_node_signal_component__WEBPACK_IMPORTED_MODULE_8__["NodeSignalComponent"], _directives_content_ref_host_directive__WEBPACK_IMPORTED_MODULE_1__["ContentRefHostDirective"], _node_stratrgy_node_stratrgy_component__WEBPACK_IMPORTED_MODULE_9__["NodeStratrgyComponent"]], styles: ["[_nghost-%COMP%]   #editor-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 20px;\n  min-width: 1000px;\n  min-height: 700px;\n  width: calc(100% - 200px);\n  display: grid;\n  grid-template-columns: 200px auto 300px;\n  grid-column-gap: 5px;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n[_nghost-%COMP%]   #editor-content[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  border: 1px solid #cccccc;\n  background: #ffffff;\n}\n[_nghost-%COMP%]   #editor-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  background: transparent;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdG9yLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUNRO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtBQUNaO0FBQ1E7RUFDSSx1QkFBQTtFQUNBLGtCQUFBO0FBQ1oiLCJmaWxlIjoiZWRpdG9yLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAjZWRpdG9yLWNvbnRlbnQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDAwcHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogNzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwMHB4KTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0byAzMDBweDtcclxuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDVweDtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgI2NjY2NjYztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor-content',
                templateUrl: './editor-content.component.html',
                styleUrls: ['./editor-content.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _core_provider_dynamic_create_comp_service__WEBPACK_IMPORTED_MODULE_4__["DynamicCreateCompService"] }, { type: _core_provider_dynamic_create_comp_init_service__WEBPACK_IMPORTED_MODULE_5__["DynamicCreateCompInitService"] }, { type: _core_provider_uniqueid_state_service__WEBPACK_IMPORTED_MODULE_6__["CompUniqueIdStateService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["EventManager"] }]; }, { viewContRef: [{
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