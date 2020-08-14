import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pure'
})
export class PurePipe implements PipeTransform {

  transform(data: number[], ...args: unknown[]): unknown {
    return data.filter(d => d % 2 === 0);
  }

}
