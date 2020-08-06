import { Component, OnInit, OnDestroy } from '@angular/core';
import { CoctailService } from '../services/coctail.service';
import { Subscription, Observable } from 'rxjs';
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
    this.coctailService.getCat().subscribe(x => console.log(x));
  }

}
