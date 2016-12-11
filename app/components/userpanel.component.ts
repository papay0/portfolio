import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';

// import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Component({
    selector: 'user-panel',
    templateUrl: 'app/components/userpanel.template.html'
})

export class UserPanelComponent  { 

    constructor(private http : Http) {        
        
    }
}