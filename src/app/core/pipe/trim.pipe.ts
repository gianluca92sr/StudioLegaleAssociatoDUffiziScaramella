import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: string): string {
    if (value === undefined)
      return 'undefined';
    return value.replace(/\s/g, "");
  }

}
