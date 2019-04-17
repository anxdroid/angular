import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  videoId: string = this.activeRoute.snapshot.params.id;
  videoUrl: SafeResourceUrl;
  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly domSanitazier: DomSanitizer
  ) {
    console.log(this.activeRoute);
    this.videoUrl =  this.domSanitazier.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videoId);
  }

  ngOnInit() {
  }

}
