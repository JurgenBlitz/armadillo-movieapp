import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { UsersService } from '../../../../services/users/users.service';


@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss'],
})
export class SignupModalComponent implements OnInit {

  public signupForm: FormGroup;
  public formError: boolean;
  public firstnameControl: AbstractControl;
  public surnameControl: AbstractControl;
  public emailControl: AbstractControl;
  public passwordControl: AbstractControl;

  constructor(
    private modalCtrl: ModalController,
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    ) {
      this.formError = false;
      this.createFormGroup();
    }

  ngOnInit() {}

  public createFormGroup() {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]]
    });
    this.firstnameControl = this.signupForm.get('firstname');
    this.surnameControl = this.signupForm.get('surname');
    this.emailControl = this.signupForm.get('email');
    this.passwordControl = this.signupForm.get('password');
  }


  public onKeydown(event){
    if (event.key === 'Backspace' || event.key === 'Delete') {
      this.formError = false;
    }
  }

  public onSignup() {
    if (this.signupForm.valid) {
      this.usersService.signupUser(this.signupForm.value).then((res: any) => {
        if (res?.status === 200) {
          this.formError = false;
        };
      }, (error) => {
        console.log('error', error)
        this.formError = true;
      })
    }
  }

  public onModalClose() {
    this.modalCtrl.dismiss();
  }

}
