import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeatherItemComponent } from './pages/weather/weather-item/weather-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    WeatherComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component:  AppHomeComponent},
      { path: 'weather/:id', component:  WeatherComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
