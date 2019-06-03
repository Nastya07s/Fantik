import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'slice'
})
export class SlicePipe implements PipeTransform {

  transform(value: string): string {

    return value.substr(0, value.indexOf(" ") === -1 ? value.length : value.indexOf(" "));
  }

}
