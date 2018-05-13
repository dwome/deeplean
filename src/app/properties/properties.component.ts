import {Component, OnInit} from '@angular/core';
import {PlaygrounddetectorService} from "../service/playgrounddetector.service";

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(public PlaygroundService: PlaygrounddetectorService) { }

  ngOnInit() {
  }

  // Handle Change on Properties Input
  changeinput(input, type)
  {
    switch (type) {
      case 1: {
        this.PlaygroundService.updateActiveElementName(input);
        break;
      }
      case 2: {
        this.PlaygroundService.updateValue(input);
        break;
      }
    }
  }
}
