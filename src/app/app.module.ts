import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModelerComponent } from './modeler/modeler.component';
import { PaletteComponent } from './palette/palette.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelerComponent,
    PaletteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
