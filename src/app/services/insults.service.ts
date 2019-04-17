import { Injectable } from '@angular/core';
import {map, tap} from "rxjs/operators";
import {YoutubeVideo} from "../../models/video";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InsultsService {

  apiUrl: string = 'https://insult.mattbas.org/api/insult';
  constructor(private readonly http: HttpClient,) { }

  apiCall(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/insult`);
  }
}
