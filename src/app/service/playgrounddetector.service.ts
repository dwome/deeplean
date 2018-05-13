import { Injectable } from '@angular/core';
import {Deepmodel} from "../../model/deepmodel";
import {Level} from "../../model/level";
import {Entity} from "../../model/entity";
import {Attribute} from "../../model/attribute";
const joint = require('../../../node_modules/jointjs/dist/joint.js');

@Injectable()
export class PlaygrounddetectorService {

  elements: any[];
  elementid: number;
  activeElement: any;
  selectedType:number;
  graph:any = new joint.dia.Graph;

  constructor() {
    this.elements = [];
    this.elementid = 0;
  }

  getActiveElementName():String {
    if(this.activeElement != undefined)
    {
      switch (this.activeElement.model.attributes.type) {
        case 'deepmodel': {
          return this.activeElement.model.attributes.attrs.headerText.text;
          break;
        }
        case 'level': {
          return this.activeElement.model.attributes.attrs.headerText.text;
          break;
        }
        case 'entity': {
          return this.activeElement.model.attributes.attrs.headerText.text;
          break;
        }
        case 'attribute': {
          return this.activeElement.model.attributes.attrs.label.text.split('=')[0];
          break;
        }
        case 'method': {
          return this.activeElement.model.attributes.attrs.label.text.split('(')[0];
          break;
        }
        case 'connection': {
          return this.activeElement.model.attributes.labels[0].attrs.text.text;
          break;
        }
      }
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

  getActiveElementValue():number{
    if(this.activeElement != undefined)
      return this.activeElement.model.attributes.attrs.label.text.split('=')[1];
  }

  clickElement(cellView)
  {
    this.activeElement = cellView;

    // Update Properties-Table Layout according to selected type
    switch (this.activeElement.model.attributes.type) {
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
      case 'connection': {
        this.selectedType = 5;
        console.log(cellView);
        break;
      }
    }
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

  //Update Name of JointJS Element (triggered from Properties)
  updateActiveElementName(input)
  {
    if(this.activeElement != undefined)
    {
      switch (this.activeElement.model.attributes.type) {
        case 'deepmodel': {
          this.activeElement.model.attr('headerText/text', input);
          break;
        }
        case 'level': {
          this.activeElement.model.attr('headerText/text', input);
          break;
        }
        case 'entity': {
          this.activeElement.model.attr('headerText/text', input);
          break;
        }
        case 'attribute': {
          var value = this.activeElement.model.attributes.attrs.label.text.split('=')[1];;
          this.activeElement.model.attr('label/text', input + " = " + value);
          break;
        }
        case 'method': {
          this.activeElement.model.attr('label/text', input+"()");
          break;
        }
        case 'connection': {
          //To Be Enhanced
          break;
        }
      }
    }
  }

  updateValue(input){
    var name = this.activeElement.model.attributes.attrs.label.text.split('=')[0];;
    this.activeElement.model.attr('label/text', name + " = " + input);
  }


}
