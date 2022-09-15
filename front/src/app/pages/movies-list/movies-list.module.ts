import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SharedComponentsModule } from '../../shared_components/shared-components.module';
import { MoviesListPageRoutingModule } from './movies-list-routing.module';
import { MoviesListPage } from './movies-list.page';
import { MovieCardComponent } from './page-components/movie-card/movie-card.component';
import { MovieModalComponent } from './page-components/movie-modal/movie-modal.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MoviesListPageRoutingModule,
    SharedComponentsModule
  ],
  declarations: [
    MoviesListPage,
    MovieCardComponent,
    MovieModalComponent
  ]
})
export class MoviesListPageModule {}
