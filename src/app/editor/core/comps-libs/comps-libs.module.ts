import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoMatchComponent } from './no-match/no-match.component';
import { NodeCalculationComponent } from './node-calculation/node-calculation.component';
import { NodeEndComponent } from './node-end/node-end.component';
import { NodeJudgmentComponent } from './node-judgment/node-judgment.component';
import { NodeStartComponent } from './node-start/node-start.component';
import { NodeComponent } from './node/node.component';

const nodeComps = [
  NodeJudgmentComponent,
  NodeStartComponent,
  NodeEndComponent,
  NodeCalculationComponent,
  NodeComponent,
  NoMatchComponent
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
  ]
})
export class CompsLibsModule { }
