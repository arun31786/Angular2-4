import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(value: number, arg?: number): number {
    if(arg){
      return Math.pow(value, arg);
    } else {
      return value*value;
    }
  }

}
