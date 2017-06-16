import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByRank'
})
export class SortByRankPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
