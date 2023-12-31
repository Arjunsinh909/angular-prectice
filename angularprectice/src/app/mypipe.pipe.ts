import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase() === 'male'){
      return 'Mr.'+value
    }else if(gender.toLowerCase() === 'female'){
      return 'Miss.'+value
    }
    return value; 
  
  }

}
