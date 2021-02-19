import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-json-schema',
  templateUrl: './json-schema.component.html',
  styleUrls: ['./json-schema.component.scss']
})
export class JsonSchemaComponent implements OnInit {
  jsonSchema:any;
  jsonSchemaString:string;
  constructor(
    private activeModal :NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.jsonSchemaString = JSON.stringify(this.jsonSchema)
  }

  close() {
    this.activeModal.dismiss()
  }

}
