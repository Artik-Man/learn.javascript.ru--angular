import { Observable } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  constructor(
    private readonly httpClient: HttpClient,
    @Inject('environment') private env: { api: { data: string } }
  ) {
  }

  public getList(): Observable<Hotel[]> {
    return this.httpClient.get<Hotel[]>(this.env.api.data);
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
