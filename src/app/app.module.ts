import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ModelerComponent } from './modeler/modeler.component';
import { PaletteComponent } from './palette/palette.component';
import { PropertiesComponent } from './properties/properties.component';
import {PlaygrounddetectorService} from "./service/playgrounddetector.service";
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelerComponent,
    PaletteComponent,
    PropertiesComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PropertiesComponent, PlaygrounddetectorService, ModelerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
