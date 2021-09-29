import { Pipe, PipeTransform } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText= filterText? filterText.toLocaleLowerCase():"";
    return filterText? value.filter((p:Product)=>p.name.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }
  //new Array<Product>()    //  bu şekilde neew lenir == Product[]

}
