import { Component, OnInit } from '@angular/core';
import { Observable, debounceTime, fromEvent, map,Subject,takeUntil } from 'rxjs';
import { GeocodingService } from 'src/app/services/geocoding.service';

interface Variant {
  name: 'string',
  id: number,
  admin1: 'string'
}



@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  variants:Variant[] = [];
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
      let {results} = response;
      let {latitude} = results
      let {longitude} = results
      
      this.geo.variantsList(results)
      this.geo.setCoords({latitude, longitude})
      
      this.variants = response.results;
      console.log(this.variants);
    });
  }

  setVisible(bool: boolean) {
    this.isVisible = bool;
  }
}
