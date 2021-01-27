import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditorDeviceSignalComponent } from './components/editor-device-signal/editor-device-signal.component';
import { EditorSettingComponent } from './components/editor-setting/editor-setting.component';
import { ContentRefHostDirective } from './directives/content-ref-host.directive';
import { EditorCoreModule } from './core/editor-core.module';
import { EditorContentComponent } from './components/editor-content/editor-content.component';

const routes: Routes = [
  { 
    path: '', 
    component: EditorContentComponent
  }
];

@NgModule({
  declarations: [
    EditorDeviceSignalComponent,
    EditorSettingComponent,
    EditorContentComponent,
    ContentRefHostDirective
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    EditorCoreModule,
    RouterModule.forChild(routes)
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EditorModule { }
