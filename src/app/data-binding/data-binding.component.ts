import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  title = 'Test title';
  imagePath = 'https://picsum.photos/200?random';
  imagePaths = ['https://picsum.photos/458/354/?image=314', 'https://picsum.photos/458/354/?image=315', 'https://picsum.photos/458/354/?image=316'];
  currImg = 0;
  imgWidth: number = 100;

  constructor() { 
    //this.title = 'Test title'
  }

  ngOnInit() {
  }

  imgWidthPerc() {
    return this.imgWidth
  }

  changeImage() {
    //this.imagePath = 'https://picsum.photos/200?random';
    this.currImg++;
    this.currImg %= this.imagePaths.length;
    this.imagePath = this.imagePaths[this.currImg];
    this.imgWidth -= 10;
    this.imgWidth %= 100;
    if (this.imgWidth <= 0) {
      this.imgWidth = 100;
    }
  }
  changeTitle(title: string) {
    this.title = title;
  }
}
