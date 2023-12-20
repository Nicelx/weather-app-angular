import { Component, OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs';

function debounce(func:Function, timeout = 300){
  let timer: any;
  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
function saveInput(){
  console.log('Saving data');
}
const processChange = debounce(() => saveInput());


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
    debounceTime(1000);

    

  }

  setVisible(bool: boolean) {
    this.isVisible = bool;
  }
}
