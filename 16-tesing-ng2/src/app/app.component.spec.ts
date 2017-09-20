import { TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // reset TestBed to a base state before each test runs
  beforeEach(async(() => {
    // TestBed creates an Angular testing module - an @NgModule class, 
    // that you configure with the configureTestingModule 

    // configureTestingModule method takes an @NgModule - like metadata object.
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy(); // not undefinded
  }));

  it(`should have as title 'My App'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    // title is component variable
    expect(app.title).toEqual('My App');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const nativeElement = fixture.debugElement.nativeElement;
    const textContent = nativeElement.querySelector('h1').textContent;
    expect(textContent).toContain('Welcome to My App!!');
  }));

  it('should increase the counter by 1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
      let beforeClick:number = app.counter;
      fixture.nativeElement.querySelector('#btn1').click();
      fixture.detectChanges();
      let afterClick:number = app.counter;
      console.log(beforeClick, afterClick);
      expect(afterClick-beforeClick).toBe(1);
  }));

  it('should decrease the counter by 1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
      let beforeClick:number = app.counter;
      fixture.nativeElement.querySelector('#btn2').click();
      fixture.detectChanges();
      let afterClick:number = app.counter;
      console.log(beforeClick, afterClick);
      expect(beforeClick-afterClick).toBe(1);
  }));

});
