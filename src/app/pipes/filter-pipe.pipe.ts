import { ɵNullViewportScroller } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText?filterText.toLowerCase():"";
    return filterText?value
    .filter((c:Car)=>c.brandName.toLocaleLowerCase()
    .indexOf(filterText)!==-1):value;
  }

}
