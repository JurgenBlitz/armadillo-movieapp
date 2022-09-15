import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {

  @Input() movieInfo: any;
  @Output() movieClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onClick(movieId: string) {
    this.movieClicked.next(this.movieInfo.id);
  }

}
