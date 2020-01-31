import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hotel, HotWeatherWidgetApiService } from '../services/hot-weather-widget-api';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hot-weather-widget-main',
  templateUrl: './hot-weather-widget-main.component.html',
  styleUrls: ['./hot-weather-widget-main.component.scss']
})
export class HotWeatherWidgetMainComponent implements OnInit {

  public list: Hotel[] = [];
  public currentHotel: Hotel = null;

  constructor() {
    console.log('HotWeatherWidgetMainComponent');
  }

  ngOnInit() {
    HotWeatherWidgetApiService.getList().pipe(take(1)).subscribe(response => {
      this.list = response;
    });
  }

  public select(hotel: Hotel) {
    this.currentHotel = hotel;
  }

}
