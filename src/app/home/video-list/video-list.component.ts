import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/models/video';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  @Input() videos: Video[];

  activeVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  selectVideo(video: Video) {
    this.activeVideo = video;
  }

}
