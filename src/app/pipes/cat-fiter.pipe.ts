import { Pipe, PipeTransform } from '@angular/core';

import { ICategory } from '../models/category.interface';

@Pipe({
  name: 'catFiter',
  pure: false
})
export class CatFiterPipe implements PipeTransform {

  transform(categories: ICategory[]): ICategory[] {
    if (!categories) return [];
    return categories.filter((cat: ICategory) => cat.isChecked);
  }

}
