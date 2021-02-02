import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoMatchComponent } from './no-match/no-match.component';
import { ElementComponent } from './comps/elements/element.component';
import { BasicComponent } from './basic/basic/basic.component';
import { LineComponent } from './comps/lines/line/line.component';
import { SvgCanvasComponent } from './comps/lines/svg-canvas/svg-canvas.component';

const nodeComps = [
  ElementComponent,
  NoMatchComponent,
  BasicComponent,
  LineComponent,
  SvgCanvasComponent
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
