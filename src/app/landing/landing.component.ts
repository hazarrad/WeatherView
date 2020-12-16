import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Weather } from '../models/Weather.model';
import { WeatherService } from '../services/weatherService.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  // weather:Weather;
  temp:string;
  tempMax:string;
  tempMin:string;
  pressure:number;
  general:string;
  humidity:number;
  wind_speed:number;
  wind_dec:number;
  city:string;
  activeId:string = "Misto Kyyiv"; 
  currentWeather: any = <any>{};

  imgCloudy:string="https://img.icons8.com/office/80/000000/partly-cloudy-day.png";
  imgSunny:string="https://img.icons8.com/emoji/96/000000/sun-emoji.png";
  imgWind:string="https://img.icons8.com/color/50/000000/wind.png";

  imgWeather:string;

  form = new FormGroup({
    
    citySearch: new FormControl()
  });
  constructor(private weatherService:WeatherService) {}
  searchCity:string="3333";

  get citySearch(): any {
    return this.form.get('citySearch');
  }
  weatherWeek:Weather[];
  ngOnInit() {    
    this.weatherService.getWeather("tetouan").subscribe(rs => {


   
      this.currentWeather=rs;
      // this.weather = weather;
      this.temp = (this.currentWeather.main.temp -273.15).toFixed(0);
      this.tempMax = (this.currentWeather.main.temp_max -273.15).toFixed(0);
      this.tempMin = (this.currentWeather.main.temp_min -273.15).toFixed(0);
      this.general=this.currentWeather.weather[0].main;
      this.imgWeather=this.funSelectWeather(this.general)
      // this.pressure = weather.main.pressure;
      // this.humidity = weather.main.humidity;
      // this.wind_speed = weather.wind.speed;
      // this.wind_dec = weather.wind.deg;
      this.city = this.currentWeather.name;
      // console.log(this.weather);
      console.log(this.currentWeather);
    });
  }

  onSubmit() {
    console.log(this.form.value);   // {name: {first: 'Nancy', last: 'Drew'}, citySearch: ''}
  
    this.weatherService.getWeather(this.citySearch.value).subscribe(rs => {


   
      this.currentWeather=rs;
      // this.weather = weather;
      this.temp = (this.currentWeather.main.temp -273.15).toFixed(0);
      this.tempMax = (this.currentWeather.main.temp_max -273.15).toFixed(0);
      this.tempMin = (this.currentWeather.main.temp_min -273.15).toFixed(0);
      this.general=this.currentWeather.weather[0].main;
      this.imgWeather=this.funSelectWeather(this.general)
      // this.pressure = weather.main.pressure;
      // this.humidity = weather.main.humidity;
      // this.wind_speed = weather.wind.speed;
      // this.wind_dec = weather.wind.deg;
      this.city = this.currentWeather.name;
      // console.log(this.weather);
      console.log(this.currentWeather);
    });
  }

 funSelectWeather(wather){
   if(wather=="Clouds"){
     return this.imgCloudy;
   }else if(wather=="Rain"){
    return this.imgWind;
   }else{
   return this.imgSunny;
   }
  
 }

}
