import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    if (filterText) {
      filterText = filterText.toLocaleLowerCase();
    } else {
      null
    }
    return filterText ? value.filter((p: Product) => p.productName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
