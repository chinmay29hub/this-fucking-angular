import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

  constructor (private weatherService : WeatherService) {

  }

  weatherData? : WeatherData
  cityName : string = "Mumbai"

  ngOnInit(): void {
    this.getWeatherData(this.cityName)
  }

  onSubmit(): void {
    this.getWeatherData(this.cityName)
    this.cityName = ""
  }

  private getWeatherData (cityName : string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next : (response) => {
        this.weatherData = response
      }
    })
  }

}
