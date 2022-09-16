import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page';
import { LoginPageRoutingModule } from './login-routing.module';
import { SharedComponentsModule } from '../../shared_components/shared-components.module';
import { SignupModalComponent } from './page-components/signup-modal/signup-modal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedComponentsModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    SignupModalComponent
  ]
})
export class LoginPageModule {}
