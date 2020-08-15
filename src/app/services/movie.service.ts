import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Discovery, Movie } from '../models';
import { Content } from '../util';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class MovieService {

  constructor(private http: HttpClient) { }

  getDiscoveryMovie(): Observable<Content<Discovery>> {
    return this.http.get<Content<Discovery>>(
      `https://api.themoviedb.org/3/discover/movie?api_key=${environment.apiKey}`
    );
  }

  getPopularMovie(): Observable<Content<Discovery>> {
    return this.http.get<Content<Discovery>>(
      `${environment.apiUrl}/movie/popular?api_key=${environment.apiKey}`
    );
  }

  getUpComingMovie(): Observable<Content<Discovery>> {
    return this.http.get<Content<Discovery>>(
      `${environment.apiUrl}/movie/upcoming?api_key=${environment.apiKey}`
    );
  }

  getTopRateMovie(): Observable<Content<Discovery>> {
    return this.http.get<Content<Discovery>>(
      `${environment.apiUrl}/movie/top_rated?api_key=${environment.apiKey}`
    );
  }

  getDetail(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movie/${id}?api_key=${environment.apiKey}`);
  }

  getSimilarMovie(id: number): Observable<Content<Discovery>> {
    return this.http.get<Content<Discovery>>(
      `${environment.apiUrl}/movie/${id}/similar?api_key=${environment.apiKey}`
    );
  }
}
