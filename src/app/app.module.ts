import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompyComponent } from './compy/compy.component';
import { SuccesComponent } from './succes/succes.component';
import { WarningComponent } from './warning/warning.component';
import { AddWordComponent } from './add-word/add-word.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent,
    CompyComponent,
    SuccesComponent,
    WarningComponent,
    AddWordComponent,
    BooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
