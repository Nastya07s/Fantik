import {Pipe, PipeTransform} from '@angular/core';
import {Article} from "../models/article";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Article[]): Article[] {
    return value.sort((one, two) => (one.updateDate > two.updateDate ? -1 : 1));
  }

}
