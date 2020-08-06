import { Observable } from 'rxjs';

import { IDrink } from './drink.interface';

export interface ICategory {
  readonly name: string;
  readonly drinks: Observable<IDrink[]>
  isChecked: boolean;
}
