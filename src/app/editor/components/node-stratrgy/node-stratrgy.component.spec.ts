import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeStratrgyComponent } from './node-stratrgy.component';

describe('NodeStratrgyComponent', () => {
  let component: NodeStratrgyComponent;
  let fixture: ComponentFixture<NodeStratrgyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeStratrgyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeStratrgyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
