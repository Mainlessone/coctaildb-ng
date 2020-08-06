import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CategoryComponent } from './category/category.component';

import { CatFiterPipe } from '../pipes/cat-fiter.pipe';


@NgModule({
  declarations: [ContentComponent, CategoryComponent, CatFiterPipe],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
