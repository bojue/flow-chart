import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorDeviceSignalComponent } from './editor-device-signal.component';

describe('EditorDeviceSignalComponent', () => {
  let component: EditorDeviceSignalComponent;
  let fixture: ComponentFixture<EditorDeviceSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorDeviceSignalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDeviceSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
