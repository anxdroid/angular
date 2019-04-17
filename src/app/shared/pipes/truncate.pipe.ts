import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  size: number;
  dots: boolean;
  transform(value: string, size:number, dots:boolean): any {
    //debugger;
    this.size = 200;
    this.dots = true;
    if (size) {
      this.size = size;
      this.dots = dots;
    }else{
      throw new Error("Size cannot be zero !");
    }
    return value.substring(0, this.size)+(this.dots ? "..." : "");
  }

}
