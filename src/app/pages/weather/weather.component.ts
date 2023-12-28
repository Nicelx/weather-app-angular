import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, fromEvent, map,Subject,takeUntil } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';




@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  isVisible = false;
  inputText: string = '';
  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 1000; //

  constructor(private geo:GeocodingService) { }

  ngOnInit(): void {
    this.searchSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe((searchValue) => {
      this.performSearch(searchValue);
    });
  }

  onKeyUp(event: Event) {
    // this.source.pipe(debounceTime(1000)).subscribe(() => {
    //   console.log('subscribeFired')
    // });
  }

  onSearch() {
    this.searchSubject.next(this.inputText);
  }

  performSearch(searchValue: string) {
    let result;
    console.log('Performing search for:', searchValue);
    result = this.geo.getCoords(searchValue);
    console.log(result)
  }

  setVisible(bool: boolean) {
    this.isVisible = bool;
  }
}
