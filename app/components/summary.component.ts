import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Entry }            from '../entries/common'
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'entry-viewer',
    templateUrl: 'app/components/summary.template.html'
})

export class EntryViewerComponent  { 
    @Input("entries") entries : Entry[];

    constructor(private sanitizer : DomSanitizer, private dataService : DataService) {        
        
    }

    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    sanitizeUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url)
    }
}