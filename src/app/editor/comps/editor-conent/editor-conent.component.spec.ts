import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorConentComponent } from './editor-conent.component';

describe('EditorConentComponent', () => {
  let component: EditorConentComponent;
  let fixture: ComponentFixture<EditorConentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorConentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorConentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
