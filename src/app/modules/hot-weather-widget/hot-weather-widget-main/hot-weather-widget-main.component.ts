import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hot-weather-widget-main',
  templateUrl: './hot-weather-widget-main.component.html',
  styleUrls: ['./hot-weather-widget-main.component.scss']
})
export class HotWeatherWidgetMainComponent implements OnInit {

  constructor() {
    console.log('HotWeatherWidgetMainComponent');
  }

  ngOnInit() {
  }

}
