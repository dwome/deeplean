import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModelerComponent } from './modeler/modeler.component';
import { PaletteComponent } from './palette/palette.component';
import { PropertiesComponent } from './properties/properties.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelerComponent,
    PaletteComponent,
    PropertiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropertiesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
