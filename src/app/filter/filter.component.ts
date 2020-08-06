import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CoctailService } from '../services/coctail.service';

import { ICategory } from '../models/category.interface'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories$: Observable<ICategory[]>;

  constructor(private coctailService: CoctailService) { }

  ngOnInit(): void {
    this.categories$ = this.coctailService.getCat();
  }

}
