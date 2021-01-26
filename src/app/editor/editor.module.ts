import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditorDeviceSignalComponent } from './comps/editor-device-signal/editor-device-signal.component';
import { EditorSettingComponent } from './comps/editor-setting/editor-setting.component';
import { EditorConentComponent } from './comps/editor-conent/editor-conent.component';
import { EditorComponent } from './comps/editor/editor.component';

const routes: Routes = [
  { 
    path: '', 
    component: EditorComponent
  }
];

@NgModule({
  declarations: [
    EditorDeviceSignalComponent,
    EditorSettingComponent,
    EditorConentComponent,
    EditorComponent,
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EditorModule { }
