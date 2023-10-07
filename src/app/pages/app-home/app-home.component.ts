import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent implements OnInit {
  city: string = 'Moscow'
  temperature: string = '20*'
  description: string = 'cloudy, windy'
  coords: string = 'H:21long L:18'
  constructor() { }

  ngOnInit(): void {
  }

}
