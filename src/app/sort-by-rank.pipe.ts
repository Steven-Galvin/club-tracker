import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'sortByRank',
  pure: false
})
export class SortByRankPipe implements PipeTransform {

  transform(input: Member[], rank){
    var output: Member[] = [];
    if(rank === "admin") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].clubRank === "Admin") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (rank === "expert") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].clubRank === "Expert") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (rank === "newbie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].clubRank === "Newbie") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
