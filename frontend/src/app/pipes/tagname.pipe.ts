import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tagname'
})
export class TagnamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
