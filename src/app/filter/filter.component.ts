import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoctailService } from '../services/coctail.service';

import { ICategory } from '../models/category.interface'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

  categories: ICategory[];

  subscription$: Subscription;

  constructor(private coctailService: CoctailService) { }

  ngOnInit(): void {
    this.subscription$ = this.coctailService.getCat().subscribe((cat: ICategory[]) => this.categories = cat);
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  applyFilter(): void {
    this.coctailService.setCat(this.categories);
  }

}
