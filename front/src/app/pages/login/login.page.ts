import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users/users.service';
import { ModalController } from '@ionic/angular';
import { SignupModalComponent } from './page-components/signup-modal/signup-modal.component';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit  {

  public loginForm: FormGroup;
  public formError: boolean;
  public emailControl: AbstractControl;
  public passwordControl: AbstractControl;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router,
    private modalCtrl: ModalController
  ) {
    this.formError = false;
    this.createFormGroup();
  }

  ngOnInit() {

  }

  public createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    });
    this.emailControl = this.loginForm.get('email');
    this.passwordControl = this.loginForm.get('password');
  }

  public onLogin() {
    if (this.loginForm.valid) {
      this.usersService.loginUser(this.loginForm.value).then((res: any) => {
        if (res?.status === 200) {
          this.formError = false;
          this.usersService.setLoggedUser(this.loginForm.controls['email'].value)
          this.loginForm.reset();
          this.router.navigate(['/movies-list']);
        };
      }, (error) => {
        console.log('error', error)
        this.formError = true;
      })
    }
  }

  public redirectToMoviesList() {
    this.router.navigate(['/movies-list']);
  }

  public onKeydown(event){
    if (event.key === 'Backspace' || event.key === 'Delete') {
      this.formError = false;
    }
  }

  public async openSignupModal() {
    const signupModal = await this.modalCtrl.create({
      component: SignupModalComponent,
      cssClass: 'custom-modal',
      backdropDismiss: false
    })
    await signupModal.present();
  }

}
