import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MoviesComponent } from './components/movie-list/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: ':id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
