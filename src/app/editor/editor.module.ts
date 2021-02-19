import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ContentRefHostDirective } from './directives/content-ref-host.directive';
import { EditorCoreModule } from './core/editor-core.module';
import { EditorContentComponent } from './components/editor-content/editor-content.component';
import { NodeSignalComponent } from './components/node-signal/node-signal.component';
import { JsonSchemaService } from './providers/json-schema.service';
import { JsonSchemaComponent } from './components/json-schema/json-schema.component';
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
    NodeSignalComponent,
    JsonSchemaComponent
  ],
  exports:[

  ],
  imports: [
    CommonModule,
    EditorCoreModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    JsonSchemaService
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class EditorModule { }
