import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { moviePosterBaseUrl } from '../../../../../shared/const';

@Component({
  selector: 'app-movie-modal',
  templateUrl: './movie-modal.component.html',
  styleUrls: ['./movie-modal.component.scss'],
})
export class MovieModalComponent implements OnInit {
  @Input() data: any;
  public moviePoster: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moviePoster = `${moviePosterBaseUrl}${this.data.movieData.poster_path}`;
    console.log('data', this.data);
  }

  public onModalClose() {
    this.modalCtrl.dismiss();
  }

}
