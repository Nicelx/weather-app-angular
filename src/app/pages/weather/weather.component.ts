import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, fromEvent, map,Subject,takeUntil } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';




@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  variants = [];
  isVisible = false;
  inputText: string = '';
  private searchSubject = new Subject<string>();
  private readonly debounceTimeMs = 1500; //

  constructor(private geo:GeocodingService) { }

  ngOnInit(): void {
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
    console.log('Performing search for:', searchValue);
    this.geo.getCoords(searchValue).subscribe(response => {
      this.geo.variantsList(response.results)
      this.variants = response.results;
      console.log(this.variants);
    });
  }

  setVisible(bool: boolean) {
    this.isVisible = bool;
  }
}
