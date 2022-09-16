import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { moviePosterBaseUrl } from '../../../../../shared/const';
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() movieInfo: any;
  @Output() movieClicked = new EventEmitter();
  public moviePoster: string;
  constructor() {
    this.moviePoster = '';
  }

  ngOnInit() {
    if (this.movieInfo) {
      this.moviePoster = `${moviePosterBaseUrl}${this.movieInfo.poster_path}`;
    }
  }

  onClick() {
    this.movieClicked.next(this.movieInfo.id);
  }

}
