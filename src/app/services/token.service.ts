import { Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private claims: any;

  constructor(private keycloakService: KeycloakService) {
    if (this.claims = this.keycloakService.isLoggedIn()) {
      this.claims = this.keycloakService.getKeycloakInstance().tokenParsed;
      console.log("Logged in !");
    }else{
      console.log("Not logged in !");
    }
  }

  get authenticated() {
    //return false;
    return this.keycloakService.isLoggedIn();
  }

  get name() {
    return this.claims['name'];
  }

  get givenName() {
    if (!!this.claims) {
      return this.claims['given_name'];
    }
    return "Guest";
  }

  get familyName() {
    return this.claims['family_name'];
  }

  get infnUUID() {
    return this.claims['infnUUID'];
  }

  get uid() {
    return this.claims['preferred_username'];
  }

  get email() {
    return this.claims['email'];
  }

  logout() {
    this.keycloakService.logout(window.location.origin);
  }
}
