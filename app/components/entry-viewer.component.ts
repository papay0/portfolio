import { Component, Input, ViewChild, ElementRef } from '@angular/core';
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
    
    public contentType = ContentType
    public experienceType = ExperienceType

    constructor(private sanitizer : DomSanitizer, private dataService : DataService) {        
        
    }

    get minHeight() {
        var value = this.entry.content.contentType == ContentType.PDFDocumentURL ? "800px" : "200px"
        return this.sanitizer.bypassSecurityTrustStyle(value)
    }

    sanitizeRessourceUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    }

    sanitizeUrl(url : string) : SafeUrl {
        return this.sanitizer.bypassSecurityTrustUrl(url)
    }
}