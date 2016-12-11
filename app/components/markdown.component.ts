import * as marked from 'marked';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { DataService }      from '../services/data.service'
import { Entry }            from '../entries/common'

@Component({
  selector: 'markdown', 
  template: `
    <div [innerHTML]="convertedData">
    </div>
  `
})
export class MarkdownComponent {
  @Input('data') data : string
  convertedData : string
  renderer : MarkedRenderer;

  constructor() {
    this.renderer = new marked.Renderer();
    this.renderer.heading = function (text, level) {
        var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
        level = Number(level) + 4
        return '<h' + level + '><a name="' +
                    escapedText +
                    '" class="anchor" href="#' +
                    escapedText +
                    '"><span class="header-link"></span></a>' +
                    text + '</h' + level + '>';
    };

  }

  ngOnChanges() {
    
    var md = marked.setOptions({
        renderer: this.renderer
    });
    
    this.convertedData = md.parse(this.data);
  }
}