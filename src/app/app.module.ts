import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompyComponent } from './compy/compy.component';
import { SuccesComponent } from './succes/succes.component';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    CompyComponent,
    SuccesComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
