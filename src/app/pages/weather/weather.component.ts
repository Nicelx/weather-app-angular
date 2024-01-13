import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, fromEvent, map,Subject,takeUntil } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';
import { WeatherService } from 'src/app/services/weather.service';

interface Variant {
  name: 'string',
  id: number,
  admin1: 'string',
  admin2?: 'string'
}



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  variants:Variant[] = [];
  isVisible = false;
  inputText: string = '';
  
  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 1500; //

  constructor(private geo:GeocodingService, private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.performSearch('Voronezh');

    this.searchSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
      this.performSearch(searchValue);
    });
  }
  ngOnDestroy() {
    this.searchSubject.complete();
  }

  onSearch() {
    this.searchSubject.next(this.inputText);
  }

  performSearch(searchValue: string) {
    this.geo.getCoords(searchValue).subscribe(response => {
      let {results} = response;
      let {latitude} = results[0]
      let {longitude} = results[0]
      
      this.geo.variantsList(results)

      this.weatherService.cityName = results[0].name
      this.weatherService.getWeather(latitude, longitude).subscribe(response2 => {
        this.weatherService.weatherData = response2;
        console.log(this.weatherService.weatherData)
      });
      
      this.variants = response.results;
      console.log(this.variants);
    });
  }

  onSelectVariant(variant:any) {
    alert('hi')
    const {name, latitude, longitude} = variant;
    this.weatherService.cityName = name;
    this.weatherService.getWeather(latitude, longitude).subscribe(weatherResponse => {
      this.weatherService.weatherData = weatherResponse;
      console.log('onSelectVariant', this.weatherService.weatherData)
    });
  }

  setVisible(bool: boolean) {
    this.isVisible = bool;
  }
}
