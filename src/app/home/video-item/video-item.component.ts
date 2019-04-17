import { Component, OnInit, Input, SimpleChanges, OnChanges, OnDestroy } from '@angular/core';
import { Video } from 'src/models/video';
import {VideoService} from "../../services/video.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-video-item',
  templateUrl: './video-item.component.html',
  styleUrls: ['./video-item.component.scss'],
  //providers: [VideoService]
})


export class VideoItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() video: Video;

  isLogged = false;
  constructor(
    private readonly vService: VideoService,
    private readonly uService: UserService,
  ) {
    //console.log('Constructor trigger', this.video);
    this.uService.user$.subscribe((user) => {
      //this.isLogged = user ? true : false;
      this.isLogged = !!user;
    })
  }

  ngOnInit() {
    //console.log('Oninit trigger', this.video);
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log('Onchanges trigger', changes);
  }

  ngOnDestroy() {
    //console.log('Ondestroy trigger', this.video);
    //console.log('Video List length: '+this.vService.getVideosList().length);
  }

}
