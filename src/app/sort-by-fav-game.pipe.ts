import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'sortByFavGame',
  pure: false
})
export class SortByFavGamePipe implements PipeTransform {

  transform(input: Member[], favGame){
    var output: Member[] = [];
    if(favGame === "banjo-kazooie") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].favoriteGame === "Banjo-Kazooie") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (favGame === "banjo-tooie") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].favoriteGame === "Banjo-Tooie") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (favGame === "yooka-laylee") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].favoriteGame === "Yooka-Laylee") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (favGame === "other") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].favoriteGame === "Other") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
