import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCalculationComponent } from './node-calculation.component';

describe('NodeCalculationComponent', () => {
  let component: NodeCalculationComponent;
  let fixture: ComponentFixture<NodeCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeCalculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
