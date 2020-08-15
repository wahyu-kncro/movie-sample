import { NgModule } from '@angular/core';
import { EllipsisPipe } from '../util';
import { SlideMovieComponent } from './slide-movie/slide-movie.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SlideMovieComponent,
    EllipsisPipe
  ],
  declarations: [
    SlideMovieComponent,
    EllipsisPipe
  ],
})
export class SharedModule { }
