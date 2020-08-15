import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services';
import { Movie, Discovery } from 'src/app/models';
import { Content } from 'src/app/util';

@Component({
  selector: 'app-movie-detail',
  templateUrl: 'movie-detail.component.html',
  styleUrls: ['movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  id: number;
  movie: Movie;
  similarMovie: Content<Discovery>;

  constructor(
    private acitvatedRoute: ActivatedRoute, 
    private movieServie: MovieService,
    private router: Router
  ) {
    this.router.events.subscribe(() => {
      this.ngOnInit();
    })
  }

  ngOnInit() {
    this.id = Number(this.acitvatedRoute.snapshot.paramMap.get('id'));
    console.log(this.id);

    if (this.id) {
      this.movieServie.getDetail(this.id)
        .subscribe(data => this.movie = data);

      this.movieServie.getSimilarMovie(this.id)
        .subscribe(data => this.similarMovie = data);
    }
  }
}
