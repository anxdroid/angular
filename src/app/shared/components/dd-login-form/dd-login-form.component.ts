import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EMPTY_LOGIN_REQUEST, LoginRequest} from "../../../../models/login";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {EMPTY} from "rxjs";
import {isAsyncEmail, isGlueLabsEmail, isINFNEmail} from "../../../validators/login-validators";

@Component({
  selector: 'app-dd-login-form',
  templateUrl: './dd-login-form.component.html',
  styleUrls: ['./dd-login-form.component.scss']
})
export class DdLoginFormComponent implements OnInit {

  @Output() readonly save = new EventEmitter<LoginRequest>();

  readonly loginRequest: LoginRequest = EMPTY_LOGIN_REQUEST;
  readonly companies = [
    {value: 'INFN', label: 'INFN'},
    {value: 'Glue Labs', label: 'Glue Labs'},
  ];
  readonly loginForm: FormGroup;
  readonly passwordInput: AbstractControl;
  readonly emailInput: AbstractControl;
  readonly companyInput: AbstractControl;

  constructor(
    private readonly fBuilder: FormBuilder,
  ) {
    const emailValidators = [Validators.email, Validators.required];
    const groups: Record<keyof LoginRequest, FormControl> = {
      email: new FormControl(EMPTY_LOGIN_REQUEST.email, emailValidators),
      password: new FormControl(EMPTY_LOGIN_REQUEST.password, [Validators.required]),
      company: new FormControl(EMPTY_LOGIN_REQUEST.company, [Validators.required]),
    };
    this.loginForm = this.fBuilder.group(groups);

    this.passwordInput = this.loginForm.get('password');
    this.emailInput = this.loginForm.get('email');
    this.companyInput = this.loginForm.get('company');

    this.companyInput.valueChanges.subscribe((company) => {
      console.log(company);
      switch(company) {
        case 'INFN' :
          //this.emailInput.setValidators([...emailValidators, isINFNEmail()]);
          this.emailInput.setAsyncValidators(isAsyncEmail('@infn.it'));
          break;
        case 'Glue Labs' :
          //this.emailInput.setValidators([...emailValidators, isGlueLabsEmail()]);
          this.emailInput.setAsyncValidators(isAsyncEmail('@glue-labs.it'));
          break;
        default:
          this.emailInput.setValidators([...emailValidators]);
          break;
      }
      this.emailInput.updateValueAndValidity();
    })
  }

  sumbitHandler() {
    if (this.loginForm.valid) {
      console.log('Submit', this.loginForm.value);
      this.save.emit(this.loginForm.value);
    }
  }

  ngOnInit() {
  }

}
