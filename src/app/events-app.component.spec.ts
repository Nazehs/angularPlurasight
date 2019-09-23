import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EventAppComponent } from './events-app.component';

describe('EventEventAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        EventAppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angularPlurasight'`, () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angularPlurasight');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(EventAppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angularPlurasight!');
  });
});
