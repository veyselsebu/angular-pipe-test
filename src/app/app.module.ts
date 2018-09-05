import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberToWeatherPipe } from './number-to-weather.pipe';
import { ToLowerCasePipe } from './to-lower-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumberToWeatherPipe,
    ToLowerCasePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
