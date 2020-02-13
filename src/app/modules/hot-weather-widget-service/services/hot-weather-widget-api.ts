import { Observable, of } from 'rxjs';

// API

// Статические методы позволяют писать вместо
//   constructor(private api: API){...}
//   this.api.get()

// конструкцию проще:
//   API.get()

// Это имеет проблему: нельзя просто взять и использовать Angular HttpClient.
// Чтобы иметь возможность пользоваться HttpClient, нужно создать дополнительный сервис:

// export let InjectorInstance: Injector;
// @Injectable({ providedIn: 'root' })
// export class StaticInjector {
//   constructor(private injector: Injector) {
//     if (!InjectorInstance) {
//       InjectorInstance = this.injector;
//     }
//   }
// }

// и использовать его:
//   class API {
//     static get(){
//       const httpClient = InjectorInstance.get<HttpClient>(HttpClient);
//       ...
//     }
//   }

// ВОПРОС: чем этот подход может быть плох?

export class HotWeatherWidgetApiService {
  public static getList(): Observable<Hotel[]> {
    const data: Hotel[] = [
      {
        img: 'assets/hot-weather-widget/images/hotel1.jpg',
        address: 'GOLDEN TULIP SHARJAH HOTEL',
        phone: 97165197777,
        tags: ['5 Stars', 'Pool', 'Own beach'],
        weather: {
          title: 'Cloudy',
          icon: 'cloudy',
          water: 24,
          temperature: 35
        },
        social_info: {
          title: 'Instagram',
          img: 'assets/hot-weather-widget/images/hotel1-s.jpg',
          followers: 4222,
          following: 351
        }
      },
      {
        img: 'assets/hot-weather-widget/images/hotel2.jpg',
        address: 'ROVE AT THE PARKS',
        phone: 97104241950,
        tags: ['4 Stars', 'Downtown', 'Own beach'],
        weather: {
          title: 'Sunny',
          icon: 'sunny',
          water: 26,
          temperature: 30
        },
        social_info: {
          title: 'Instagram',
          img: 'assets/hot-weather-widget/images/hotel2-s.jpg',
          followers: 7434,
          following: 123
        }
      },
      {
        img: 'assets/hot-weather-widget/images/hotel3.jpg',
        address: 'CITYMAX HOTEL RAS AL KHAIMAH',
        phone: 97172073700,
        tags: ['5 Stars', 'Downtown', 'Interior Design'],
        weather: {
          title: 'Stormy',
          icon: 'stormy',
          water: 22,
          temperature: 24
        },
        social_info: {
          title: 'Instagram',
          img: 'assets/hot-weather-widget/images/hotel3-s.jpg',
          followers: 2362,
          following: 74
        }
      },
      {
        img: 'assets/hot-weather-widget/images/hotel4.jpg',
        address: 'DOUBLE TREE BY HILTON',
        phone: 97172260666,
        tags: ['4 Stars', 'Pool', 'Interior Design'],
        weather: {
          title: 'Sunny',
          icon: 'sunny',
          water: 26,
          temperature: 33
        },
        social_info: {
          title: 'Instagram',
          img: 'assets/hot-weather-widget/images/hotel4-s.jpg',
          followers: 4532,
          following: 975
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
  tags: string[];
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
