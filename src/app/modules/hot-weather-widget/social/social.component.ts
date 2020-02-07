import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../services/hot-weather-widget-api';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {
  @Input() social: Hotel['social_info'];
}
