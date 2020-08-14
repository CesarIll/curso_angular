import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expo'
})
export class ExpoPipe implements PipeTransform {

  transform(value: number, exponent?: number): unknown {
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
