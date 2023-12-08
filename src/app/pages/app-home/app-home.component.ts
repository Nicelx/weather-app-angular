import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
  city: string = 'Moscow'
  temperature: string = '20'
  description: string = 'cloudy, windy'
  coords: string = 'H:21long L:18'
  data:any;
  constructor( private http: HttpClient,) { }

  ngOnInit(): void {
    this.getData().subscribe((data) => {
      this.data = data;
    })
  }
  getData():Observable<any> {
    return this.http.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
  }
}
