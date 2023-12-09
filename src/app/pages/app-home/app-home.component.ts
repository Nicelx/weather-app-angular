import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherService } from "src/app/services/weather.service";
import { GeocodingService } from "src/app/services/geocoding.service";

@Component({
	selector: "app-app-home",
	templateUrl: "./app-home.component.html",
	styleUrls: ["./app-home.component.scss"],
})
export class AppHomeComponent implements OnInit {
	city: string = "Воронеж";
	temperature: string = "";
	description: string = "cloudy, windy";
	coords: string = "";
	latitude: number = 0;
	longitude: number = 0;
	data: any;
	constructor(private http: HttpClient, private weatherService: WeatherService, private geo: GeocodingService) {}

	ngOnInit(): void {
		this.geo.getCoords(this.city).subscribe(response => {
			this.coords = response;
			console.log(this.coords);
		})

		this.weatherService.getWeather().subscribe((response) => {
			this.data = response;
		});
	}
}
