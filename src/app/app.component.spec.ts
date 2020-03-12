import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {NgAnonymizeModule} from "./ng-anonymize.module";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        NgAnonymizeModule,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should define list of 4 methods`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.methods.length).toEqual(4);
  });

  it('demo should render default values for John Doe', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.output-value').textContent.length).toEqual(8);
  });
});
