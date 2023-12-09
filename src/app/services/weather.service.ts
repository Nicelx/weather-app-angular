import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  latitude :number= 0 ;
  longitude :number= 0 ;

  constructor(private http: HttpClient) { 

  }

  getWeather():Observable<any> {
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=51.67204&longitude=39.1843&hourly=temperature_2m')
  }


}
