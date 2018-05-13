import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';
const joint = require('../../../node_modules/jointjs/dist/joint.js');
import {PlaygrounddetectorService} from "../service/playgrounddetector.service";

@Component({
  selector: 'app-modeler',
  templateUrl: './modeler.component.html',
  styleUrls: ['./modeler.component.css']
})
export class ModelerComponent implements OnInit {

  // JointJS Element declaration
  rect:any;
  level0:any;
  level1:any;
  level2:any;
  entity1:any;
  entity2:any;
  attribute1:any;
  attribute2: any;
  method1:any;
  // Counter for Mockup Demo Scenario
  levelcount:number;
  deepmodelcount:number;
  entitycount:number;
  attributecount:number;
  methodcount:number;
  element:any; // General Element Storage
  activeCell:any;


  constructor(private PlaygroundService: PlaygrounddetectorService) {}

  ngOnInit() {

    const that = this;
    this.levelcount = 0;
    this.deepmodelcount = 0;
    this.entitycount = 0;
    this.attributecount = 0;
    this.methodcount = 0;

    // JointJS Paper Background
    let paper = new joint.dia.Paper({
      el: jQuery("#paper"),
      width: 1500,
      height: 700,
      model: this.PlaygroundService.graph,
      gridSize: 1
    });

    // JointJS Element Definition
    this.rect = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 10 },
      type: 'deepmodel',
      size: { width: 600, height: 500 },
      attrs: {
        root: { title: 'DeepModel'},
        body:{fill: 'white'},
        header:{ fill: 'lightgrey'},
        headerText:{ text: 'PizzaModel', fill:'black'},
      }
    });
    this.level0 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 60 },
      type: 'level',
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header:{ fill: 'white'},
        headerText:{ text: 'Level O0', fill:'black'},
      }
    });
    this.level1 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 210 },
      type: 'level',
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header:{ fill: 'white'},
        headerText:{ text: 'Level O1', fill:'black'},
      }
    });
    this.level2 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 250, y: 360 },
      type: 'level',
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header:{ fill: 'white'},
        headerText:{ text: 'Level O2', fill:'black'},
      }
    });
    this.entity1 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 270, y: 100 },
      type: 'entity',
      size: { width: 200, height: 100 },
      attrs: {
        root: { title: 'Entity'},
        body:{fill: 'white'},
        header:{ fill: 'white'},
        headerText:{ text: 'PizzaType', fill:'black'},
      }
    });
    this.entity2 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 600, y: 100 },
      type: 'entity',
      size: { width: 200, height: 100 },
      attrs: {
        root: { title: 'Entity'},
        body:{fill: 'white'},
        header:{ fill: 'white'},
        headerText:{ text: 'ToppingType', fill:'black'},
      }
    });
    this.attribute1 = new joint.shapes.standard.Rectangle({
      position: { x: 270, y: 130 },
      type: 'attribute',
      size: { width: 200, height: 20 },
      attrs: {
        body:{fill: 'white'},
        label:{ text: 'Size = 3'},
      }
    });
    this.method1 = new joint.shapes.standard.Rectangle({
      position: { x: 270, y: 150 },
      type: 'method',
      size: { width: 200, height: 20 },
      attrs: {
        body:{fill: 'white'},
        label:{ text: 'doIt()'},
      }
    });

    // Trigger Action if JointJS Element is clicked
    paper.on('cell:pointerdown',
      function(cellView, evt, x, y) {
        that.PlaygroundService.clickElement(cellView);
        that.activeCell = cellView;
      }
    );
  }

  // Instantiate Element on the Paper (triggered from Palette)
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
            this.rect.embed(this.element);
            break;
          }
          case 1: {
            this.element = this.level1;
            this.rect.embed(this.element);
            break;
          }
          case 2: {
            this.element = this.level2;
            this.rect.embed(this.element);
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
            this.level0.embed(this.element);
            break;
          }
          case 1: {
            this.element = this.entity2;
            this.level0.embed(this.element);
            break;
          }
        }
        this.entitycount++;
      }
      else{
        alert("Select a Level");
      }
    }
    if(element == 'attribute')
    {
      if(this.PlaygroundService.getActiveElementType() == 'entity') {
        switch (this.attributecount) {
          case 0: {
            this.element = this.attribute1;
            break;
          }
        }
        this.attributecount++;
      }
      else{
        alert("Select an Entity");
      }
    }
    if(element == 'method')
    {
      if(this.PlaygroundService.getActiveElementType() == 'entity') {
        switch (this.methodcount) {
          case 0: {
            this.element = this.method1;
            break;
          }
        }
        this.methodcount++;
      }
      else{
        alert("Select an Entity");
      }
    }
    if(element == 'connection')
    {
      if(this.entitycount>0)
      {
        console.log("connect");
        this.link(this.entity1, this.entity2,  'has');
      }
      else {
        alert("Add two Entities");
      }
    }

    if(this.element != null) {
      this.PlaygroundService.addElement(this.element);
      this.PlaygroundService.graph.addCell(this.element);
      this.element = null;
    }
  }

  link(source, target, label) {

    var cell = new joint.shapes.fsa.Arrow({
      type: 'connection',
      source: { id: source.id },
      target: { id: target.id },
      labels: [{ position: .5, attrs: { text: { text: label || '', 'font-weight': 'bold' } } }]
    });
    this.PlaygroundService.graph.addCell(cell);
    return cell;
  }
}
