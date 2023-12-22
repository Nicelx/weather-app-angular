import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, fromEvent, map,Subject,takeUntil } from 'rxjs';


// function debounce(func:Function, timeout = 300){
//   let timer: any;
//   return (...args: any) => {
//     clearTimeout(timer);
//     timer = setTimeout(() => { func.apply(this, args); }, timeout);
//   };
// }
// function saveInput(){
//   console.log('Saving data');
// }
// const processChange = debounce(() => saveInput());


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  isVisible = false;
  // source = fromEvent(document, 'keyup');
  inputText: string = '';
  private searchSubject = new Subject<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onKeyUp(event: Event) {
    // this.source.pipe(debounceTime(1000)).subscribe(() => {
    //   console.log('subscribeFired')
    // });
  }

  onSearch() {
    this.searchSubject.next(this.inputText);
  }

  setVisible(bool: boolean) {
    this.isVisible = bool;
  }
}
