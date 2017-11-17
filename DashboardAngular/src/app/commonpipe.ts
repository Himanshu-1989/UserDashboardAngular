import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/Rx';




@Pipe({
  name: 'FilterPipe',
})
export class FilterPipe implements PipeTransform {
 
  transform(value, input: string) {
      if (input==null || input=="" || input==" " || !input || undefined==input){ 
        return value
      }else{
          
          return value.filter(v=>v.userName.toLowerCase().indexOf(input)!==  -1);
          
      }}
      
}

