// Native Angular/Ionic imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
// components
import { AppHeaderComponent } from './header/header-component';

@NgModule({
  declarations: [
    AppHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    AppHeaderComponent
  ],
  schemas: []
})
export class SharedComponentsModule { }
