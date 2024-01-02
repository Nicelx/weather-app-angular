import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Coords {
	latitude: number;
	longitude: number;
}

@Injectable({
	providedIn: "root",
})
export class GeocodingService {
	variants = [];
	city: string = "Voronezh";
	coords: Coords = {
		latitude: 0,
		longitude: 0,
	};

	constructor(private http: HttpClient) {}

	setCoords(coords: Coords) {
		this.coords = coords;
	}
	setCity(city: string) {
		this.city = city;
		console.log("city", this.city);
	}
	getCoords(city: string): Observable<any> {
		this.city = city;
		return this.http.get(
			`https://geocoding-api.open-meteo.com/v1/search?name=${this.city}&count=10&language=ru&format=json`
		);
	}
	variantsList(variants?: any) {
		if (variants) {
			this.variants = variants;
			return;
		}
		return this.variants;
		
	}
}
