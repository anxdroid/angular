import { Injectable } from '@angular/core';
import {CanActivate, CanDeactivate} from "@angular/router";
import {UserService} from "../services/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanDeactivate<any> {

  constructor(
    private readonly uService:UserService
  ) {

  }
  canActivate() {
    console.log("canActivate");
    return this.uService.isLogged();
  }

  canDeactivate() {
    console.log("canDeactivate");
    return true;
  }
}
