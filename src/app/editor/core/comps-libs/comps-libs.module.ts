import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoMatchComponent } from './no-match/no-match.component';
import { NodeCalculationComponent } from './node-comps/node-calculation/node-calculation.component';
import { NodeEndComponent } from './node-comps/node-end/node-end.component';
import { NodeJudgmentComponent } from './node-comps/node-judgment/node-judgment.component';
import { NodeStartComponent } from './node-comps/node-start/node-start.component';
import { NodeComponent } from './node-comps/node/node.component';
import { BasicComponent } from './node-basic/basic/basic.component';

const nodeComps = [
  NodeJudgmentComponent,
  NodeStartComponent,
  NodeEndComponent,
  NodeCalculationComponent,
  NodeComponent,
  NoMatchComponent,
  BasicComponent
]
@NgModule({
  declarations: [
    [...nodeComps]
  ],
  imports: [
    CommonModule
  ],
  entryComponents:[
    [...nodeComps]
  ],
  exports:[
    [...nodeComps]
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CompsLibsModule { }
