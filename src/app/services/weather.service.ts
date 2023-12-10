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

  getWeather(latitude:number, longitude:number):Observable<any> {
    return this.http.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`)
  }


}
