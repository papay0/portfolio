import { Component, Input, ViewChild, ElementRef, trigger,
         state, style, transition, animate } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Entry, ContentType, ExperienceType  }            from '../entries/common'
import { DomSanitizer, SafeHtml,SafeUrl,SafeStyle } from '@angular/platform-browser';

@Component({
    selector: 'entry-viewer',
    templateUrl: 'app/components/entry-viewer.template.html'
})

export class EntryViewerComponent  { 
    @Input("entry") entry : Entry;
    @ViewChild("viewer") viewer : ElementRef;

    public contentType = ContentType
    public experienceType = ExperienceType
    private _expanded : boolean = false;
    constructor(private sanitizer : DomSanitizer, private dataService : DataService) {        
        
    }

    get minHeight() {
        var minHeight = this._expanded ? "800px" : "200px"
        var value = this.entry.content.contentType == ContentType.PDFDocumentURL ? minHeight : "200px"
        return this.sanitizer.bypassSecurityTrustStyle(value)
    }

    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    sanitizeUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url)
    }

    toogleExpand() {
        this._expanded = !this._expanded
    }
}