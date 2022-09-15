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
  public formErrorMsg: string;
  public usernameControl: AbstractControl;
  public passwordControl: AbstractControl;
  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.formErrorMsg = '';
    this.createFormGroup();
  }

  ngOnInit() {}

  createFormGroup() {
    this.loginForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    });
    this.usernameControl = this.loginForm.get('username');
    this.passwordControl = this.loginForm.get('password');
  }

  onLogin() {
    if (this.loginForm.valid) {
      this.redirectToMoviesList();
    }
  }

  redirectToMoviesList() {
    this.router.navigate(['/movies-list']);
  }

  onKeydown(event){
    if (event.key === 'Backspace' || event.key === 'Delete') {
      this.formErrorMsg = '';
    }
  }

}
