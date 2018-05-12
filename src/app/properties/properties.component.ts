import {Component, OnInit} from '@angular/core';
import {PlaygrounddetectorService} from "../service/playgrounddetector.service";
import {ModelerComponent} from "../modeler/modeler.component";


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(public PlaygroundService: PlaygrounddetectorService, public ModelComp: ModelerComponent) { }

  ngOnInit() {
  }

  changeinput(input)
  {
    this.PlaygroundService.updateActiveElementName(input);
  }
}
