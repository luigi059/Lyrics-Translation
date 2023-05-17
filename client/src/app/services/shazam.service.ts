import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShazamService {
  private baseUrl = 'https://shazam-core.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': environment.shazamCoreRapidApiKey,
  });

  constructor(private http: HttpClient) {}

  getTopCharts() {
    return this.http.get(`${this.baseUrl}v1/charts/world`, {
      headers: this.headers,
    });
  }

  getSongsByGenre(genre: string) {
    return this.http.get(
      `${this.baseUrl}v1/charts/genre-world?genre_code=${genre}`,
      { headers: this.headers }
    );
  }

  getSongsByCountry(countryCode: string) {
    return this.http.get(
      `${this.baseUrl}v1/charts/country?country_code=${countryCode}`,
      { headers: this.headers }
    );
  }

  getSongsBySearch(searchTerm: string) {
    return this.http.get(
      `${this.baseUrl}v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
      { headers: this.headers }
    );
  }

  getArtistDetails(artistId: string) {
    return this.http.get(
      `${this.baseUrl}v2/artists/details?artist_id=${artistId}`,
      { headers: this.headers }
    );
  }

  getSongDetails(songid: string) {
    return this.http.get(
      `${this.baseUrl}v1/tracks/details?track_id=${songid}`,
      { headers: this.headers }
    );
  }

  getSongRelated(songid: string) {
    return this.http.get(
      `${this.baseUrl}v1/tracks/related?track_id=${songid}`,
      { headers: this.headers }
    );
  }
}
