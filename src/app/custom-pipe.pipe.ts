import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true
})
export class CustomPipePipe implements PipeTransform {


  transform(value: string, gender: string): string {
    if (gender === 'male') {
      return 'Mr. ' + value;
    } else if (gender === 'female') {
      return 'Miss. ' + value;
    } else {
      return value;
    }
  }

  /*transform(value: string, ...args: unknown[]): unknown {
    console.log('value',value);
    let returnValue=value.split(' ');
    console.log('returnValue',returnValue);
    //let returnText;
    for(let i=0; i<returnValue?.length;i++){
      console.log('i',returnValue[i])
      returnValue[i]=returnValue[i].charAt(0).toUpperCase()+returnValue[i]?.slice(1).toLowerCase();
      console.log('returnText',returnValue[i])
    }
    let finalword=returnValue.join(' ')?.replaceAll(',',' ');
    return finalword;
  }*/
  
}
