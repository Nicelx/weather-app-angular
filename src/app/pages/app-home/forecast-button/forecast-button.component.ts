import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-button',
  templateUrl: './forecast-button.component.html',
  styleUrls: ['./forecast-button.component.scss']
})
export class ForecastButtonComponent implements OnInit {
  isFocus = false;

  constructor() { }

  ngOnInit(): void {
  }

}
