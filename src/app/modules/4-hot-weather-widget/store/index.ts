import { Hotel } from '../../shared/services/api.service';

export interface IRootState {
  hotels: Hotel[];
  current: Hotel;
}
