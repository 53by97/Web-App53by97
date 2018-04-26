import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Greeting } from './greeting'


@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {

  }
  
  private greetingUrl = '/home-api/user/greeting?name=Srimant';

  greet() {
    return this.http.get<Greeting>(this.greetingUrl, { observe: 'response' });
  }
}