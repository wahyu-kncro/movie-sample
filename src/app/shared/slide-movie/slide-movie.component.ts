import { Component, OnInit, Input } from '@angular/core';
import { Content } from 'src/app/util';
import { Discovery } from 'src/app/models';

@Component({
  selector: 'app-slide-movie',
  templateUrl: 'slide-movie.component.html'
})
export class SlideMovieComponent implements OnInit {

  @Input() movies: Content<Discovery>;
  @Input() title: string;

  constructor() {}

  ngOnInit() { }
}
