import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { WeatherData } from '../models/weather-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http : HttpClient) { }

  getWeatherData (cityName : string) : Observable<WeatherData> {
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      params : new HttpParams().set("q", cityName).set("appid", environment.appid).set("units", "metric").set("appid", environment.appid)
    })
  }

}
