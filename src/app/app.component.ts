import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'INFN CORSO ANGULAR';
  searchValue?: string;
  toClearValue?: boolean;
  searchHandler(keyword: string) {
    console.log(keyword);
    this.searchValue = keyword;
  }
  clearHandler() {
    console.log('Clear !');
    this.toClearValue = true;
  }
}
