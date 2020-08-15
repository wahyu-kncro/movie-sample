import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services';
import { Content } from 'src/app/util';
import { Discovery } from 'src/app/models';

@Component({
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  movies: Content<Discovery>;
  newMovies: Content<Discovery>;
  topRateMovie: Content<Discovery>;

  constructor(private movieService: MovieService) { }

  ngOnInit() { 
    this.getDiscoveryMovie();
    this.getNewMovie();
    this.getTopRateMovie();
  }

  getDiscoveryMovie() {
    this.movieService.getDiscoveryMovie()
      .subscribe(data => this.movies = data);
  }

  getNewMovie() {
    this.movieService.getUpComingMovie()
      .subscribe(data => this.newMovies = data);
  }

  getTopRateMovie() {
    this.movieService.getTopRateMovie()
      .subscribe(data => this.topRateMovie = data);
  }
}
