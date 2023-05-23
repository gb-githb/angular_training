import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grade'
})
export class GradePipe implements PipeTransform {

  transform(value: Number): String {
    if (value === 1){
      return "Outstanding";
    }
    else if(value === 2){
      return "Excellent"
    }
    else if(value === 3){
      return "Good"
    }
    else{
      return "Average"
    }
    
  }

}
