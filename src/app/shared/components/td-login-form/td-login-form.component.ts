import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EMPTY_LOGIN_REQUEST, LoginRequest} from "../../../../models/login";

@Component({
  selector: 'app-td-login-form',
  templateUrl: './td-login-form.component.html',
  styleUrls: ['./td-login-form.component.scss']
})
export class TdLoginFormComponent implements OnInit {

  @Output() readonly save = new EventEmitter<LoginRequest>();

  readonly loginRequest: LoginRequest = EMPTY_LOGIN_REQUEST;
  readonly companies = [
    {value: 'INFN', label: 'INFN'},
    {value: 'Glue Labs', label: 'Glue Labs'},
  ];
  constructor() { }

  sumbitHandler(isValid: boolean) {
    console.log(this.loginRequest);
    if (isValid) {
      this.save.emit(this.loginRequest);
    }else{
      console.log("Not valid !");
    }
  }

  ngOnInit() {
  }

}
