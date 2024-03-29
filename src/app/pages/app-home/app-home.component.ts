import { Component, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { WeatherService } from "src/app/services/weather.service";
import { GeocodingService } from "src/app/services/geocoding.service";
import { Coords } from './../../services/geocoding.service';

@Component({
	selector: "app-app-home",
	templateUrl: "./app-home.component.html",
	styleUrls: ["./app-home.component.scss"],
})
export class AppHomeComponent implements OnInit {
	city: string = this.weatherService.cityName || 'Воронеж';
	temperature: string = this.weatherService.weatherData || "";
	temperatureArray: string[]= [];
	description: string = "cloudy, windy";
	latitude: number = 0;
	longitude: number = 0;
	data: any;
	constructor(private http: HttpClient, private weatherService: WeatherService, private geo: GeocodingService) {}

	logIt() {
		console.log(this.weatherService.weatherData) 
	}

	ngOnInit(): void {
		this.geo.getCoords(this.city).subscribe(response => {
			this.latitude = response.results[0].latitude;
			this.longitude = response.results[0].longitude;

			this.weatherService.getWeather(this.latitude, this.longitude).subscribe((response) => {
				this.weatherService.weatherData = response;
				this.data = response;
				this.temperatureArray = response.hourly.temperature_2m;
				this.temperature = response.hourly.temperature_2m[0]
			});
		})
	}
}
