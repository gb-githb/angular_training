import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: any[], propertyName:String,propertyValue:any): any[] {
    debugger;
    let output :any[] = [];
    // parseInt(propertyValue);
    if(propertyName === "" && propertyValue === ""){
      output = input;
    }
    else if (propertyName === "empNo") {
       output = input.filter(item => item.empNo === parseInt(propertyValue));
    }
    else if (propertyName === "empName") {
       output = input.filter(item => item.empName === propertyValue);
    }
    return output;
  }

}
