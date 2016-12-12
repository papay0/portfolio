import { Component } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Entry, ContentType, ExperienceType  }            from '../entries/common'
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'presentation',
    templateUrl: 'app/components/presentation.template.html'
})

export class PresentationComponent  { 
    constructor() {        
        
    }
}