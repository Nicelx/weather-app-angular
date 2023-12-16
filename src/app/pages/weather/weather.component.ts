import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  isVisible = false;
  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: Event) {
    console.log('keyUp')
  }

  setVisible() {
    this.isVisible = true;
  }
}
