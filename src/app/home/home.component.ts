import {Component, Input} from '@angular/core';
import { VideoService } from '../services/video.service';
import { Video } from 'src/models/video';
import {Observable} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {InsultsService} from "../services/insults.service";
import {TokenService} from "../services/token.service";
import {UserService} from "../services/user.service";
import {User} from "../../models/user";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  videosList: Video[];
  videosList$: Observable<Video[]>;
  insult$: Observable<string>;


  @Input() set toClear(value: boolean) {
    if (value) {
      //this.vService.emptyList();
      this.videosList = [];
    }
  }

  user: string = "guest";

  constructor(
    //private readonly tService: TokenService,
    private readonly vService: VideoService,
    private readonly uService: UserService,
    private readonly iService: InsultsService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
    this.getVideos();
    //this.getInsults();

    this.uService.user$.subscribe((user) => {
      //this.isLogged = user ? true : false;
      this.user = user.username;
    })
  }

  getVideos() {
    /*
    this.vService.trending().subscribe((data) => {
      this.videosList = data;
    });
    */
    this.videosList$ = this.vService.trending();
    this.activatedRoute.queryParams.subscribe((query) => {
      this.videosList$ = query && query.q ? this.vService.search(query.q) : this.vService.trending()
      console.log(query);
    })
  }

  getInsults() {
    this.insult$ = this.iService.apiCall();
  }

  clearVideoList() {
    this.videosList = [];
    this.vService.emptyList();
  }

  addVideo() {
    // FIXME: Implement with observable
    const video: Video = {
      //id: '4',
      title: 'New Video',
      description: 'New Description',
    };
    this.vService.addVideo(video).then(() => {this.videosList = this.vService.getVideosList()});
  }

  ngOnInit() {
    /*
    if (this.tService.authenticated) {
      this.user = this.tService.givenName;
    }
    */
  }

}
