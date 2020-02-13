import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../shared/services/api.service';

@Component({
  selector: 'app-hot-weather-widget-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialComponent {
  @Input() social: Hotel['social_info'];
}
