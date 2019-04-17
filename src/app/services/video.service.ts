import {Inject, Injectable} from '@angular/core';
import {Video, YoutubeVideo} from 'src/models/video'
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";

const FAKE_VIDEOS: Video[] = [{id: '1', title: 'Video 1', description: 'Description 1'.repeat(3),},
  {id: '2', title: 'Video 2', description: 'Description 2'.repeat(3),},
  {id: '3', title: 'Video 3', description: 'Description 3'.repeat(3),}];

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosList: Video[] = [];

  constructor(
    @Inject('YT_API_KEY') private readonly ytApiKey: string,
    @Inject('YT_API_URL') private readonly ytApiUrl: string,
    private readonly http: HttpClient,
  ) {
    console.log('Init video service');
   }

   search(q: string): Observable<Video[]> {
     const params: string = [
       ['q', q].join("="),
       ['chart', 'mostPopular'].join("="),
       ['part', 'id,snippet'].join("="),
       ['regionCode', 'IT'].join("="),
       ['safeSearch', 'moderate'].join("="),
       ['maxResult', '20'].join("="),
       ['type', 'video'].join("="),
       ['key', `${this.ytApiKey}`].join("=")
     ].join('&');
     /*
     return this.http.get(`${this.ytApiUrl}/search?${params}`).pipe(
       map((data: any) => data.items.map((item) => new YoutubeVideo(item))),
       tap((videos) => this.videosList = videos)
     );
     */
     return this.apiCall('search', params, false);
   }

   trending(): Observable<Video[]> {
    const params: string = [
      ['chart', 'mostPopular'].join("="),
      ['regionCode', 'IT'].join("="),
      ['part', 'snippet,contentDetails,statistics'].join("="),
      ['maxResult', '10'].join("="),
      ['type', 'video'].join("="),
      ['key', `${this.ytApiKey}`].join("=")
    ].join('&');
    /*
    return this.http.get(`${this.ytApiUrl}/videos?${params}`).pipe(
       map((data: any) => data.items.map((item) => new YoutubeVideo(item))),
       tap((videos) => this.videosList = videos)
     );
     */
     return this.apiCall('videos', params);
   }

   apiCall(type: 'videos' | 'search', params: string, update = true) {
     return this.http.get(`${this.ytApiUrl}/${type}?${params}`).pipe(
       map((data: any) => data.items.map((item) => new YoutubeVideo(item))),
       tap((videos) => {
         if (update) {
           this.videosList = videos;
         }
       })
     );
   }

   getVideosList() {
     return this.videosList;
   }

   emptyList() {
    this.videosList = [];
   }

   addVideo(video: Video) {
     return new Promise<Video>((resolve) => {
        setTimeout(() => {
          const videoAdded = {
            ...video,
              //id: (Math.random() * 20).toFixed(0).toString()
            id: (this.videosList.length + 1).toString(),
            description: 'Video '+(this.videosList.length + 1).toString(),
            title: 'Video '+(this.videosList.length + 1).toString(),
          };
          resolve(videoAdded);
        }, 500);
     }).then((videoDataResponse) => {
       this.videosList = [...this.videosList, videoDataResponse];
       console.log('Video added. Video list is long', this.videosList.length)
       return videoDataResponse;
     });
   }
}
