import { Component, OnInit, Input } from '@angular/core';

import { ICategory } from 'src/app/models/category.interface';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() category: ICategory;

  constructor() { }

  ngOnInit(): void {
  }

}
