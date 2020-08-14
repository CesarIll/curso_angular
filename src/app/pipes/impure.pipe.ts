import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impure',
  pure: false
})
export class ImpurePipe implements PipeTransform {

  transform(data: number[], ...args: unknown[]): unknown {
    return data.filter(d => d % 2 === 0);
  }

}
