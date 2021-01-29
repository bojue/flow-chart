import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeJudgmentComponent } from './node-judgment.component';

describe('NodeJudgmentComponent', () => {
  let component: NodeJudgmentComponent;
  let fixture: ComponentFixture<NodeJudgmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeJudgmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeJudgmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
