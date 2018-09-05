import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NumberToWeatherPipe} from './number-to-weather.pipe';
import { ToLowerCasePipe} from './to-lower-case.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NumberToWeatherPipe,
        ToLowerCasePipe
      ], 
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'pipesTest'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('pipesTest');
  }));
 
});
