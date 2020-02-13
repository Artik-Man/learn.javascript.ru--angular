import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Hotel, ApiService } from '../shared/services/api.service';
import { take } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hot-weather-widget-main',
  templateUrl: './hot-weather-widget.component.html',
  styleUrls: ['./hot-weather-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotWeatherWidgetComponent implements OnInit {

  public list: Hotel[] = [];
  public currentHotel: Hotel = null;
  public title = 'Hot Weather Widget';

  constructor(
    private titleService: Title,
    private api: ApiService) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.api.getList()
      .pipe(take(1))
      .subscribe(response => {
        this.list = response;
      });
  }

  public select(hotel: Hotel) {
    this.currentHotel = hotel;
  }

}
