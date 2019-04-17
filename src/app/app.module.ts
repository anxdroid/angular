import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeModule } from './home/home.module';
import {VideoService} from "./services/video.service";
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {BearerInterceptorService} from "./interceptors/bearer-interceptor.service";
import {Route, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthGuardService} from "./guards/auth-guard.service";
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializer} from "./utils/app.init";
import {INFNKeycloakService} from "./guards/infn-keycloak.service";

const ROUTES: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path:'video/:id',
    // lazy loading
    loadChildren: './video/video.module#VideoModule',
    canActivate: [AuthGuardService],
    canDeactivate: [AuthGuardService]
  },
  {
    path:'loginAAI',
    component: HomeComponent,
    //canActivate: [INFNKeycloakService],
    //canDeactivate: [INFNKeycloakService]
  },
  {
    path:'login',
    // lazy loading
    loadChildren: './login/login.module#LoginModule',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    // Internal Modules
    HomeModule,
    SharedModule,
    KeycloakAngularModule,

  ],
  providers: [VideoService,
    {provide: 'YT_API_KEY', useValue: environment.YOUTUBE_API_KEY},
    {provide: 'YT_API_URL', useValue: environment.YOUTUBE_API_URL},
    {provide: HTTP_INTERCEPTORS, useClass: BearerInterceptorService, multi:true,},
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
