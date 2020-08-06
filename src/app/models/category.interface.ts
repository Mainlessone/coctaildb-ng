import { Observable } from 'rxjs';
import { IDrink } from './drink.interface';

export interface ICategory {
  name: string;
  isChecked: boolean;
  drinks: Observable<IDrink>
}
