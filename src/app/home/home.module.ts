import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoItemComponent } from './video-item/video-item.component';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from "@angular/router";

const COMPONENTS = [HomeComponent,];

@NgModule({
  declarations: [...COMPONENTS, VideoListComponent, VideoItemComponent],
  imports: [
    CommonModule, SharedModule, RouterModule
  ],
  exports: [
    ...COMPONENTS,
  ]
})
export class HomeModule { }
