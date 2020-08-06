import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { CatFiterPipe } from '../pipes/cat-fiter.pipe';
import { CategoryComponent } from './category/category.component';




@NgModule({
  declarations: [ContentComponent, CatFiterPipe, CategoryComponent],
  imports: [
    CommonModule
  ],
  exports: [ContentComponent]
})
export class ContentModule { }
