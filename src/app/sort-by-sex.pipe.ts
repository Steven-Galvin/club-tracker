import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model'

@Pipe({
  name: 'sortBySex',
  pure: false
})
export class SortBySexPipe implements PipeTransform {

  transform(input: Member[], sex){
    var output: Member[] = [];
    if(sex === "male") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sex === "Male") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (sex === "female") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].sex === "Female") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (sex === "other") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].sex === "Other") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
