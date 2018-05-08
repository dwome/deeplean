import { Component, OnInit } from '@angular/core';

var activeElement;
var activeName;
var elementtype;

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setActiveElement(element)
  {
    activeElement = element;
    activeName = activeElement.model.attributes.attrs.headerText.text;
    elementtype = activeElement.model.attributes.attrs.root.title;

  }

}
