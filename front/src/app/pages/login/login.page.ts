import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users/users.service';

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
    private router: Router
  ) {
    this.formError = false;
  }

  ngOnInit() {
    this.createFormGroup();
  }

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    });
    this.emailControl = this.loginForm.get('email');
    this.passwordControl = this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.usersService.loginUser(this.loginForm.value).then((res: any) => {
        if (res?.status === 200) {
          this.formError = false;
          this.router.navigate(['/movies-list']);
        };
      }, (error) => {
        console.log('error', error)
        this.formError = true;
      })
    }
  }

  redirectToMoviesList() {
    this.router.navigate(['/movies-list']);
  }

  onKeydown(event){
    if (event.key === 'Backspace' || event.key === 'Delete') {
      this.formError = false;
    }
  }

}
