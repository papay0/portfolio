import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Entry }            from '../entries/common'

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard.template.html'
})

export class DashboardComponent  { 
    constructor(private dataService : DataService) {        
        
    }

    get entries() : Entry[] {
        return this.dataService.library.entries
    }
}