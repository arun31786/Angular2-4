import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipePipe implements PipeTransform {

  transform(value: number, args?: number): number {
    if(args){
      return Math.pow(value, args);
    } else {
      return value*value; 
    }
  }

}

/*
num -> num ^ 2
num -> num ^ 3

    -> 2 ^ 3 = 8
*/