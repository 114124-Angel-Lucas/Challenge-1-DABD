import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcBaseComponent } from './calc-base/calc-base.component';
import { CalcButtonsComponent } from './calc-buttons/calc-buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcBaseComponent,
    CalcButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
