import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMatchComponent } from './no-match.component';

describe('NoMatchComponent', () => {
  let component: NoMatchComponent;
  let fixture: ComponentFixture<NoMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
