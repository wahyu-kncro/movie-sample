import { NgModule } from '@angular/core';
import { MoviesComponent } from './components/movie-list/movies.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule
  ],
  exports: [
    MoviesComponent
  ],
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
})
export class MoviesModule { }
