import {Component, Input, NgZone, OnInit} from '@angular/core';
import {PlaygrounddetectorService} from "../service/playgrounddetector.service";


@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor(private ngZone: NgZone, public PlaygroundService: PlaygrounddetectorService) { }

  ngOnInit() {
  }
}
