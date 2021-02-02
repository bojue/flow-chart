import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompsLibsModule } from './comps-libs/comps-libs.module';
import { DynamicCreateCompService } from './provider/dynamic-create-comp.service';
import { DynamicCreateCompInitService } from './provider/dynamic-create-comp-init.service';
import { BasicStyleComponent } from './comps-libs/basic/basic-style/basic-style.component';
import { CompUniqueIdStateService } from './provider/uniqueid-state.service';
@NgModule({
  declarations: [
  BasicStyleComponent],
  imports: [
    CommonModule,
    CompsLibsModule,
  ],
  providers:[
    DynamicCreateCompService,
    DynamicCreateCompInitService,
    CompUniqueIdStateService
  ]
})
export class EditorCoreModule { }
