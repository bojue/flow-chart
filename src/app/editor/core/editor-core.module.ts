import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompsLibsModule } from './comps-libs/comps-libs.module';
import { DynamicCreateCompService } from './provider/dynamic-create-comp.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    CompsLibsModule,
  ],
  providers:[
    DynamicCreateCompService
  ]
})
export class EditorCoreModule { }
