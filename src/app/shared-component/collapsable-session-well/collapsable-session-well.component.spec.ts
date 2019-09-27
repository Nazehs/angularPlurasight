import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapsableSessionWellComponent } from './collapsable-session-well.component';

describe('CollapsableSessionWellComponent', () => {
  let component: CollapsableSessionWellComponent;
  let fixture: ComponentFixture<CollapsableSessionWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapsableSessionWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapsableSessionWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
