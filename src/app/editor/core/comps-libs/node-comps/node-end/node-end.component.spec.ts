import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeEndComponent } from './node-end.component';

describe('NodeEndComponent', () => {
  let component: NodeEndComponent;
  let fixture: ComponentFixture<NodeEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeEndComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
