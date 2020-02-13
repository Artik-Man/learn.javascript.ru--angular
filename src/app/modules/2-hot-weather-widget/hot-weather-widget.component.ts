import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
import { StateService } from './services/state.service';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-hot-weather-widget-main',
  templateUrl: './hot-weather-widget.component.html',
  styleUrls: ['./hot-weather-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotWeatherWidgetComponent implements OnInit {

  public title = 'Hot Weather Widget';

  constructor(
    private titleService: Title,
    private stateService: StateService,
    private api: ApiService
  ) {
    this.titleService.setTitle(this.title);
  }

  ngOnInit() {
    this.api.getList()
      .pipe(take(1))
      .subscribe(response => {
        this.stateService.hotelList.next(response);
      });
  }

}
