import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'col'
})
export class ColPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
