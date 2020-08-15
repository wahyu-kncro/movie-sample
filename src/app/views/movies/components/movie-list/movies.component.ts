import { Component, OnInit } from '@angular/core';
import { Content } from 'src/app/util';
import { Discovery } from 'src/app/models';
import { MovieService } from 'src/app/services';
import { finalize } from 'rxjs/operators';

@Component({
  templateUrl: 'movies.component.html'
})
export class MoviesComponent implements OnInit {

  movies: Content<Discovery>;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getDiscoveryMovie();
  }

  getDiscoveryMovie() {
    this.movieService.getDiscoveryMovie()
      .subscribe(data => this.movies = data);
  }
}
