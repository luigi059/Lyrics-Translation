import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExpressAPI {
  private baseUrl = 'http://localhost:5000/api/';
  token = localStorage.getItem('token');

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
  getSongTranslations(songId: string) {
    return this.http.get(`${this.baseUrl}translation/song/${songId}`);
  }
  createSongTranslation(
    language: string,
    translation: string,
    songId: string,
    name: string,
    picturePath: string,
    requestId?: string
  ) {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    if (requestId) {
      return this.http.post(
        `${this.baseUrl}translation/request/grant`,
        {
          songId: songId,
          translation: translation,
          language: language,
          translator: name,
          translatorPicturePath: picturePath,
          requestId: requestId,
        },
        {
          headers: headers,
        }
      );
    } else {
      return this.http.post(
        `${this.baseUrl}translation/create/`,
        {
          songId: songId,
          translation: translation,
          language: language,
          translator: name,
          translatorPicturePath: picturePath,
        },
        {
          headers: headers,
        }
      );
    }
  }
  makeRequest(songId: string, name: string, language: string) {
    const headers = new HttpHeaders({
      Authorization: this.token,
    });
    return this.http.post(
      `${this.baseUrl}translation/request/`,
      {
        songId: songId,
        language: language,
        owner: name,
      },
      {
        headers: headers,
      }
    );
  }
}
