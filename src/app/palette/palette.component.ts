import { Component, OnInit } from '@angular/core';
import {ModelerComponent} from "../modeler/modeler.component";

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  constructor(private modelerComp: ModelerComponent) { }

  ngOnInit() {
  }
  instantiate(model)
  {
    console.log(model);
    this.modelerComp.instantiate();
  }

}
