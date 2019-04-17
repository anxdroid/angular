import { Component, OnInit } from '@angular/core';
import {LoginRequest} from "../../models/login";
import {UserService} from "../services/user.service";
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private readonly uService: UserService,
    private readonly router: Router,
  ) {

  }

  ngOnInit() {
  }

  loginHandler(request: LoginRequest) {
    this.uService.login(request).subscribe((user) => {
      this.router.navigate(['/home']);
    })
  }

}
