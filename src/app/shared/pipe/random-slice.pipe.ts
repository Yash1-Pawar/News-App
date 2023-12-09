import { Pipe, PipeTransform } from '@angular/core';
import { Inews } from 'src/app/model/Inews';

@Pipe({
  name: 'randomSlice'
})
export class RandomSlicePipe implements PipeTransform {

  transform(value: Inews[] | undefined, size: number): Inews[] {
    if (value) {
      let num = Math.floor(Math.random() * value.length);
      if (num + size > value.length) num = 0;
      console.log('pipe:', num, size, value.length);
      return value.slice(num, num + size);
    } else {
      return [];
    }
  }

}
