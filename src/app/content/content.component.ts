import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CoctailService } from '../services/coctail.service';

import { ICategory } from '../models/category.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  categories$: Observable<ICategory[]>;

  constructor(private coctailService: CoctailService) { }

  ngOnInit(): void {
    this.categories$ = this.coctailService.getCat();
  }

}
