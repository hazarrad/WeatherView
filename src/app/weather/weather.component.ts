import { Component, OnInit } from '@angular/core';
import { Weather } from '../models/Weather.model';
import { WeatherService } from '../services/weatherService.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {


  constructor() { }

  weatherWeek: Weather[];
  ngOnInit() {

  }

}
