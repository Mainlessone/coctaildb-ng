import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ContentModule } from './content/content.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';

import { CoctailService } from './services/coctail.service';
import { CatFiterPipe } from './pipes/cat-fiter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    ContentModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CoctailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
