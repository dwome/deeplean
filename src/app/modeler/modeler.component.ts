import { Component, OnInit } from '@angular/core';
import {PropertiesComponent} from "../properties/properties.component";
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
const joint = require('../../../node_modules/jointjs/dist/joint.js');

var graph;
var rect;
var level0;
var level1;
var level2;
var levelcount;

@Component({
  selector: 'app-modeler',
  templateUrl: './modeler.component.html',
  styleUrls: ['./modeler.component.css']
})
export class ModelerComponent implements OnInit {


  constructor(private propComp: PropertiesComponent) {

  }

  ngOnInit() {
    levelcount = 0;
    graph = new joint.dia.Graph;

    let paper = new joint.dia.Paper({
      el: jQuery("#paper"),
      model: graph,
      gridSize: 1
    });

    rect = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 100, y: 30 },
      size: { width: 600, height: 500 },
      attrs: {
        root: { title: 'DeepModel'},
        body:{fill: 'white'},
        header{ fill: 'lightgrey'},
        headerText{ text: 'PizzaModel', fill:'black'},
      }
    });

    level0 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 100, y: 60 },
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Level O0', fill:'black'},
      }
    });

    level1 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 100, y: 210 },
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Level O1', fill:'black'},
      }
    });
    level2 = new joint.shapes.standard.HeaderedRectangle({
      position: { x: 100, y: 360 },
      size: { width: 600, height: 150 },
      attrs: {
        root: { title: 'Level'},
        body:{fill: 'white'},
        header{ fill: 'white'},
        headerText{ text: 'Level O2', fill:'black'},
      }
    });

    var uml = joint.shapes.uml;

    var states = {

      s2: new uml.State({
        position: {x: 100, y: 100},
        size: {width: 600, height: 500},
        name: "Pizza Model",
        events: ["entry / create()", "exit / kill()", "A / foo()", "B / bar()"],
        attrs: {
          '.uml-state-body': {
            fill: 'rgba(48, 208, 198, 0.1)',
            stroke: 'rgba(48, 208, 198, 0.5)',
            'stroke-width': 1.5
          },
          '.uml-state-separator': {
            stroke: 'rgba(48, 208, 198, 0.4)'
          }
        }
      }),


      s4: new uml.State({
        position: {x: 100, y: 400},
        size: {width: 600, height: 100},
        name: "Level O0",
        attrs: {
          '.uml-state-body': {
            fill: 'rgba(48, 208, 198, 0.1)',
            stroke: 'rgba(48, 208, 198, 0.5)',
            'stroke-width': 1.5
          },
          '.uml-state-separator': {
            stroke: 'rgba(48, 208, 198, 0.4)'
          }
        }
      })

    };
    // _.each(states, function (c) {
    //   graph.addCell(c);
    // });

    states.s2.embed(states.s4);

    rect.embed(level0);

    var linkAttrs = {
      'fill': 'none',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      'stroke': '#4b4a67'
    };

    var that = this;

    paper.on('cell:pointerdown',
      function(cellView, evt, x, y) {
        console.log(cellView);
        console.log(cellView.model.attributes.name);
        that.propComp.setActiveElement(cellView);
      }
    );

  }
  instantiate(element)
  {

    if(element === 'deepmodel')
    {
      graph.addCell(rect);
    }

    if(element == 'level')
    {
      switch(levelcount) {
        case 0: {
          graph.addCell(level0);
          break;
        }
        case 1: {
          graph.addCell(level1);
          break;
        }
        case 2: {
          graph.addCell(level2);
          break;
        }
      }
      levelcount++;

    }


  }
}
