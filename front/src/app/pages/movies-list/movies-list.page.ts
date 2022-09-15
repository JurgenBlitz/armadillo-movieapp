import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies/movies.service';
import { ModalController } from '@ionic/angular';
import { MovieModalComponent } from './page-components/movie-modal/movie-modal.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {
  public loading: boolean;
  public mockedMovies: any;
  public currentMovies: Array<any> = [];

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
    )
    {
      this.loading = true;
    }

  ngOnInit() {
    this.getMovies();
  }

  public getMovies() {
    this.moviesService.getMoviesList().then((res: any) => {
      if (res?.data) {
        this.currentMovies = res.data;
        this.loading = false;
      }
    }, (error) => {
      this.loading = false;
      console.log('error', error);
    });
  }

  public visitMovieDetail(selectedMovieId: string) {
    this.moviesService.getMovieDetails(selectedMovieId).then((res: any) => {
      if (res?.data) {
        const movieData = this.currentMovies.find(movie => movie.id === selectedMovieId);
        this.createMovieDetailsModal(movieData, res.data.cast, res.data.crew);
      }
    });
  }

  public async createMovieDetailsModal(movieData, cast, crew) {
    const movieModal = await this.modalCtrl.create({
      component: MovieModalComponent,
      componentProps: {
        data: {movieData, cast, crew},
      },
      cssClass: 'custom-modal'
    });
    await movieModal.present();
  }

  public refreshMovies() {
    this.loading = true;
    this.currentMovies = [];
    this.getMovies();
  }

}
