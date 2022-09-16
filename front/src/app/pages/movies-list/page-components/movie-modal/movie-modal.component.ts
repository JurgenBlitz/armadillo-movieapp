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
  public movieCast: [];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.moviePoster = `${moviePosterBaseUrl}${this.data.movieData.poster_path}`;
    if (this.data.cast) {
      this.movieCast = this.data.cast;
      this.setCastPhotoUrls();
    }
  }

  public setCastPhotoUrls() {
    this.movieCast.forEach((castmember: any) => {
      castmember.profile_path = `${moviePosterBaseUrl}${castmember.profile_path}`
    })
  }

  public onModalClose() {
    this.modalCtrl.dismiss();
  }

}
