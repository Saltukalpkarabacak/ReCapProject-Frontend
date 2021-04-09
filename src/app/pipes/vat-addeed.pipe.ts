import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAddeed'
})
export class VatAddeedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value +((value*rate)/100);
  }

}
