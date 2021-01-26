import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  url = 'http://127.0.0.1:3000';
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(`${this.url}/users`);
  }
}
