import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hotel, ApiService } from '../shared/services/api.service';
import { take } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hot-weather-widget-main',
  templateUrl: './hot-weather-widget.component.html',
  styleUrls: ['./hot-weather-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotWeatherWidgetComponent {

  public list$: Observable<Hotel[]> = this.api.getList().pipe(take(1));
  public currentHotel: Hotel = null;
  public title = 'Hot Weather Widget';

  constructor(
    private titleService: Title,
    private api: ApiService
  ) {
    this.titleService.setTitle(this.title);
  }

  public select(hotel: Hotel) {
    this.currentHotel = hotel;
  }

}
