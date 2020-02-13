import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hotel } from '../../../shared/services/api.service';

@Component({
  selector: 'app-hot-weather-widget-hotel-item',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelComponent {
  @Input() hotel: Hotel;
}
