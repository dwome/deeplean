import { Component, OnInit } from '@angular/core';
import {ModelerComponent} from "../modeler/modeler.component";
import {PlaygrounddetectorService} from "../service/playgrounddetector.service";


@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  constructor(private modelerComp: ModelerComponent, private PlaygroundService: PlaygrounddetectorService) { }

  ngOnInit() {
  }

  instantiate(model)
  {
    this.modelerComp.instantiate(model);
  }

}
