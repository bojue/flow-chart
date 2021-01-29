import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSignalComponent } from './node-signal.component';

describe('NodeSignalComponent', () => {
  let component: NodeSignalComponent;
  let fixture: ComponentFixture<NodeSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeSignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
