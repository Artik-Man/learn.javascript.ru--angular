import { Observable, of } from 'rxjs';

export class HotWeatherWidgetApi {
  public static getList(): Observable<Hotel[]> {
    const data: Hotel[] = [
      {
        img: '../../../../assets/hot-weather-widget/images/hotel1.jpg',
        address: 'GOLDEN TULIP SHARJAH HOTEL',
        phone: 97165197777,
        weather: {
          title: 'Cloudy',
          icon: 'cloud',
          water: 24,
          temperature: 35
        },
        social_info: {
          title: 'Instagram',
          img: '../../../../assets/hot-weather-widget/images/hotel1-s.jpg',
          followers: 4222,
          following: 351
        }
      },
      {
        img: '../../../../assets/hot-weather-widget/images/hotel2.jpg',
        address: 'ROVE AT THE PARKS',
        phone: 971042419500,
        weather: {
          title: 'Sunny',
          icon: 'cloud',
          water: 26,
          temperature: 30
        },
        social_info: {
          title: 'Instagram',
          img: '../../../../assets/hot-weather-widget/images/hotel2-s.jpg',
          followers: 7434,
          following: 123
        }
      },
      {
        img: '../../../../assets/hot-weather-widget/images/hotel3.jpg',
        address: 'CITYMAX HOTEL RAS AL KHAIMAH',
        phone: 97172073700,
        weather: {
          title: 'Cloudy',
          icon: 'cloud',
          water: 25,
          temperature: 33
        },
        social_info: {
          title: 'Instagram',
          img: '../../../../assets/hot-weather-widget/images/hotel3-s.jpg',
          followers: 2362,
          following: 74
        }
      }
    ];

    return of(data);
  }
}

export interface Hotel {
  img: string;
  address: string;
  phone: number;
  weather: {
    title: string;
    icon: string;
    water: number;
    temperature: number;
  };
  social_info: {
    title: string;
    img: string;
    followers: number;
    following: number;
  };
}
