import { WeatherData } from './modules/weather.module';
import { subscribe } from 'diagnostics_channel';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    
  }
}
onsubmit() {

}
 

constructor(private WeatherService: WeatherService){

}

cityName: string = 'Thessaloniki';
weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName); 
    this.cityName='';
  }
 

    onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName='';
    }

    private getWeatherData (cityName: string) {
      this.WeatherService.getWeatherData('cityName')
    .subscribe({
     next: (response: any) => {
      this.weatherData = response;
      console.log(response);
     }
    });
  }

