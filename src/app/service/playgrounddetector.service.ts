import { Injectable } from '@angular/core';

@Injectable()
export class PlaygrounddetectorService {

  activeElement: any;

  constructor() {
  }

  getActiveElementName():String {
    if(this.activeElement != undefined)
      return this.activeElement.model.attributes.attrs.root.title;
  }

  updateActive(cellView)
  {
    //update active element
    this.activeElement = cellView;

    //update table information

  }

}
