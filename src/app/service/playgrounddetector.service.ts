import { Injectable } from '@angular/core';
import {Deepmodel} from "../../model/deepmodel";
import {Level} from "../../model/level";
import {Entity} from "../../model/entity";
import {Attribute} from "../../model/attribute";
import {ModelerComponent} from "../modeler/modeler.component";

@Injectable()
export class PlaygrounddetectorService {

  element:any;
  elements: any[];
  elementid: number;
  activeElement: any;
  selectedType:number;

  constructor() {
    this.elements = [];
    this.elementid = 0;
  }

  getActiveElementName():String {
    if(this.activeElement != undefined)
    {
      return this.activeElement.model.attributes.attrs.headerText.text;
    }
  }


  getActiveElementType():String {
    if(this.activeElement != undefined)
      return this.activeElement.model.attributes.type;
  }

  getActiveElementID():String {
    if(this.activeElement != undefined)
      return this.activeElement.model.attributes.id;
  }

  clickElement(cellView)
  {
    //update active element
    this.activeElement = cellView;

    //update table information
    switch (this.activeElement.model.attributes.type) {
    //check element type
      case 'deepmodel': {
        this.selectedType = 1;
        break;
      }
      case 'level': {
        this.selectedType = 2;
        break;
      }
      case 'entity': {
        this.selectedType = 3;
        break;
      }
      case 'attribute': {
        this.selectedType = 4;
        break;
      }
    }

    //update table content
    console.log(this.getActiveElementID());
    }

  addElement(element)
  {
    element.cid = this.elementid;
    switch (element.attributes.type) {
      case 'deepmodel': {
        element = new Deepmodel();
        this.elements[this.elementid] = element;
        break;
      }
      case 'level': {
        element = new Level();
        this.elements[this.elementid] = element;
        break;
      }
      case 'entity': {
        element = new Entity();
        this.elements[this.elementid] = element;
        break;
      }
      case 'attribute': {
        element = new Attribute();
        this.elements[this.elementid] = element;
        break;
      }
    }
    this.elements[this.elementid] = element;
    this.elementid++;
  }


}
