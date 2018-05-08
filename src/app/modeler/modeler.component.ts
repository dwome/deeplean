import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import * as _ from 'lodash';
import * as $ from 'backbone';
const joint = require('../../../node_modules/jointjs/dist/joint.js');

@Component({
  selector: 'app-modeler',
  templateUrl: './modeler.component.html',
  styleUrls: ['./modeler.component.css']
})
export class ModelerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let graph = new joint.dia.Graph;

    let paper = new joint.dia.Paper({
      el: jQuery("#paper"),
      model: graph,
      gridSize: 1
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
        events: ["entry / create()"],
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
    _.each(states, function (c) {
      graph.addCell(c);
    });

    states.s2.embed(states.s4);

    var linkAttrs = {
      'fill': 'none',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
      'stroke': '#4b4a67'
    };

    var transitons = [
      new uml.Transition({
        source: {id: states.s0.id},
        target: {id: states.s1.id},
        attrs: {'.connection': linkAttrs}
      }),
      new uml.Transition({
        source: {id: states.s1.id},
        target: {id: states.s2.id},
        attrs: {'.connection': linkAttrs}
      }),
      new uml.Transition({
        source: {id: states.s1.id},
        target: {id: states.s3.id},
        attrs: {'.connection': linkAttrs}
      }),
      new uml.Transition({
        source: {id: states.s3.id},
        target: {id: states.s4.id},
        attrs: {'.connection': linkAttrs}
      }),
      new uml.Transition({
        source: {id: states.s2.id},
        target: {id: states.se.id},
        attrs: {'.connection': linkAttrs}
      })
    ];

    graph.addCells(transitons);

  }
}
