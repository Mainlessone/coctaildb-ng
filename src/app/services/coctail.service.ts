import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ICategory } from '../models/category.interface';
import { IDrink } from '../models/drink.interface';

@Injectable({
  providedIn: 'root'
})
export class CoctailService {

  url: string = 'https://www.thecocktaildb.com/api/json/v1/1';

  private categories = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getCategoriesFromApi().subscribe(cat => this.setCat(cat));
  }

  getCat(): Observable<ICategory[]> {
    return this.categories.asObservable();
  }

  setCat(newCat): void {
    this.categories.next(newCat);
  }

  getCategoriesFromApi(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.url}/list.php?c=list`).pipe(
      pluck('drinks'),
      map((data: any) => data.map(cat => {
        return {
          name: cat.strCategory,
          isChecked: true,
          drinks: this.getListOfDrinksFromApi(cat.strCategory)
        }
      }))
    )

  }

  getListOfDrinksFromApi(nameOfCategory): Observable<IDrink> {
    return this.http.get<IDrink>(`${this.url}/filter.php?c=${nameOfCategory}`).pipe(
      pluck('drinks')
    );
  }
}
