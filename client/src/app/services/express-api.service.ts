import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpressAPI {
  private baseUrl = 'http://localhost:5000/api/';

  constructor(private http: HttpClient) {}

  register(formData: FormData) {
    return this.http.post(`${this.baseUrl}user/register`, formData);
  }
  login(user: any) {
    return this.http.post(`${this.baseUrl}user/login`, user);
  }
  getInfo(token: string) {
    const headers = new HttpHeaders({
      Authorization: token,
    });
    return this.http.get(`${this.baseUrl}user/info`, {
      headers: headers,
    });
  }
}
