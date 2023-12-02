import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHomeComponent } from './pages/app-home/app-home.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { WeatherItemComponent } from './pages/weather/weather-item/weather-item.component';
import { RouterModule } from '@angular/router';
import { ExpandBlockComponent } from './pages/app-home/expand-block/expand-block.component';
import { ForecastButtonComponent } from './pages/app-home/forecast-button/forecast-button.component';
import { HoverDirective } from './pages/app-home/forecast-button/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    WeatherComponent,
    WeatherItemComponent,
    ExpandBlockComponent,
    ForecastButtonComponent,
    HoverDirective,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component:  AppHomeComponent},
      { path: 'weather', component:  WeatherComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
