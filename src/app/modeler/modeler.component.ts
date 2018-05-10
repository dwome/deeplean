import {Component, Input, OnInit} from '@angular/core';
import {PropertiesComponent} from "../properties/properties.component";
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
const joint = require('../../../node_modules/jointjs/dist/joint.js');
import {PlaygrounddetectorService} from "../service/playgrounddetector.service";



@Component({
  selector: 'app-modeler',
  templateUrl: './modeler.component.html',
  styleUrls: ['./modeler.component.css']
})
export class ModelerComponent implements OnInit {

  graph:any;
  rect:any;
  level0:any;
  level1:any;
  level2:any;
  levelcount:number;
  deepmodelcount:number;
  entitycount:number;
  entity1;
  entity2;
  element:any;


  constructor(private propComp: PropertiesComponent, private PlaygroundService: PlaygrounddetectorService) {

  }

  ngOnInit() {
    this.levelcount = 0;
    this.deepmodelcount = 0;
    this.entitycount = 0;
    this.graph = new joint.dia.Graph;

    let paper = new joint.dia.Paper({
      el: jQuery("#paper"),
      width 1500,
      height: 700,
      model: this.graph,
      gridSize: 1
    });

    this.rect = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 10 },
      type: 'deepmodel',
      size: { width: 600, height: 500 },
      attrs: {
        root: { title: 'DeepModel'},
        body:{fill: 'white'},
        header{ fill: 'lightgrey'},
        headerText{ text: 'PizzaModel', fill:'black'},
      }
    });

    this.level0 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 60 },
      type: 'level',
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Level O0', fill:'black'},
      }
    });

    this.level1 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 210 },
      type: 'level',
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Level O1', fill:'black'},
      }
    });
    this.level2 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 360 },
      type: 'level',
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Level O2', fill:'black'},
      }
    });
    this.entity1 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 270, y: 100 },
      type: 'entity',
      size: { width: 200, height: 100 },
      attrs: {
        root: { title: 'Entity'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Pizza', fill:'black'},
      }
    });

    this.entity2 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 600, y: 100 },
      type: 'entity',
      size: { width: 200, height: 100 },
      attrs: {
        root: { title: 'Entity'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Pizza', fill:'black'},
      }
    });

    let that = this;

    paper.on('cell:pointerdown',
      function(cellView, evt, x, y) {
        that.PlaygroundService.clickElement(cellView);
      }
    );

  }
  instantiate(element) {

    if (element == 'deepmodel') {
      if(this.deepmodelcount < 1)
      {
        this.element = this.rect;
        this.deepmodelcount++;
      }
    }
    if (element == 'level') {
      if(this.PlaygroundService.getActiveElementType() == 'deepmodel')
      {
        switch (this.levelcount) {
          case 0: {
            this.element = this.level0;
            break;
          }
          case 1: {
            this.element = this.level1;
            break;
          }
          case 2: {
            this.element = this.level2;
            break;
          }
        }
        this.levelcount++;
      }
      else{
        alert("Select a Deep Model");
      }
    }
    if(element == 'entity')
    {
      if(this.PlaygroundService.getActiveElementType() == 'level') {
        switch (this.entitycount) {
          case 0: {
            this.element = this.entity1;
            break;
          }
          case 1: {
            this.element = this.entity2;
            break;
          }
        }
        this.entitycount++;
      }
      else{
        alert("Select a Level");
      }
    }


    if(this.element != null) {
      this.PlaygroundService.addElement(this.element);
      this.graph.addCell(this.element);
      this.element = null;
    }
  }
}
