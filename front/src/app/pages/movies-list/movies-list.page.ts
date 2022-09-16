import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies/movies.service';
import { UsersService } from 'src/app/services/users/users.service';
import { ModalController, AlertController } from '@ionic/angular';
import { MovieModalComponent } from './page-components/movie-modal/movie-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.page.html',
  styleUrls: ['./movies-list.page.scss'],
})
export class MoviesListPage implements OnInit {
  public loading: boolean;
  public currentMovies: Array<any> = [];
  public activeList: string;

  constructor(
    private moviesService: MoviesService,
    private usersService: UsersService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private router: Router
    )
    {
      this.activeList = 'current';
    }

  ngOnInit() {
    this.getCurrentMovies();
  }

  public getCurrentMovies() {
    this.loading = true;
    this.activeList = 'current';
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

  public getPopularMovies() {
    this.activeList = 'popular';
    this.loading = true;
    this.moviesService.getPopularMoviesList().then((res: any) => {
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
    this.activeList === 'current' ? this.getCurrentMovies() : this.getPopularMovies();
  }

  public async logOut() {
    const logoutAlert = await this.alertCtrl.create({
      header: 'Do you want to log out?',
      inputs: [],
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => { }
        }, {
          text: 'Yes',
          handler: () => {
            this.usersService.deleteLoggedUser();
            this.router.navigate(['/login']);
          }
        }
      ]
    });

    await logoutAlert.present();
  }

}
