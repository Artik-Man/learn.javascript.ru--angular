import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Hotel} from '../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {
  public social: Hotel['social_info'];

  @Input() set socialInfo(social: Hotel['social_info']) {
    this.social = social;
  }

}
