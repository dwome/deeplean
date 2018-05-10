import { Injectable } from '@angular/core';
import {Deepmodel} from "../../model/deepmodel";
import {Level} from "../../model/level";
import {Entity} from "../../model/entity";
import {Attribute} from "../../model/attribute";

@Injectable()
export class PlaygrounddetectorService {

  element:any;
  elements: any[];
  elementid: number;
  activeElement: any;
  table_deepmodel: boolean = false;
  table_level: boolean = false;
  table_entity: boolean = false;
  table_attribute: boolean = false;
  table_method: boolean = false;
  selectedType:number;

  constructor() {
    this.elements = [];
    this.elementid = 0;
  }

  getActiveElementName():String {
    if(this.activeElement != undefined)
      return this.activeElement.model.attributes.attrs.root.title;
  }


  getActiveElementType():String {
    if(this.activeElement != undefined)
      return this.activeElement.model.attributes.type;
  }

  clickElement(cellView)
  {
    //update active element
    this.activeElement = cellView;
    console.log(this.elements);
    console.log(this.activeElement.model.id);
    console.log(this.elements[this.activeElement.model.id]);

    //update table information
    switch (this.activeElement.model.attributes.type) {
    //check element type
      case 'deepmodel': {
        this.selectedType = 4;
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

    //fill with information
    }



  addElement(element)
  {

    element.id = this.elementid;
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
