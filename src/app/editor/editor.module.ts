import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentRefHostDirective } from './directives/content-ref-host.directive';
import { EditorCoreModule } from './core/editor-core.module';
import { EditorContentComponent } from './components/editor-content/editor-content.component';
import { NodeStratrgyComponent } from './components/node-stratrgy/node-stratrgy.component';
import { NodeSignalComponent } from './components/node-signal/node-signal.component';

const routes: Routes = [
  { 
    path: '', 
    component: EditorContentComponent
  }
];

@NgModule({
  declarations: [
    EditorContentComponent,
    ContentRefHostDirective,
    NodeStratrgyComponent,
    NodeSignalComponent
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
