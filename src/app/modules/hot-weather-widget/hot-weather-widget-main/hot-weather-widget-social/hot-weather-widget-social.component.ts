import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Hotel} from '../../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './hot-weather-widget-social.component.html',
  styleUrls: ['./hot-weather-widget-social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotWeatherWidgetSocialComponent {
  public social: Hotel['social_info'];

  @Input() set socialInfo(social: Hotel['social_info']) {
    this.social = social;
  }

}
