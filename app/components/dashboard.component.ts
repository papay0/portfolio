import { Component, Input, ViewChild, ElementRef, trigger,
         state, style, transition, animate } from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { DataService }      from '../services/data.service'
import { Entry }            from '../entries/common'
import * as $               from 'jquery'
import { Router, ActivatedRoute } from '@angular/router';

interface Category {
    name : string
    entries : Entry[]    
}

@Component({
    selector: 'dashboard',
    templateUrl: 'app/components/dashboard.template.html',
    animations: [
        trigger('isActive', [
            transition(
                ':enter', [
                    style({
                        transform: 'translateX(100%)', 
                        opacity: 0
                    }),
                    animate('400ms', style({
                        transform: 'translateX(0)',
                        opacity: 1
                    }))
                ]
            ),
            transition(
                ':leave', [
                    style({
                        transform: 'translateX(0)',
                        opacity: 1,
                        overflow: 'hidden',
                        height: '*'
                    }),
                    animate('400ms', style({
                        height: '0px',
                        overflow: 'hidden',
                        transform: 'translateX(100%)',
                        opacity: 0
                    }))
                ]
            )
        ])
    ]
})

export class DashboardComponent  { 
    entryByCategory: { [id : string]: Entry[] }
    showCategory: string = "all";

    constructor(private route : ActivatedRoute, private dataService : DataService) {        
        this.computeCategories()
        
    }

    ngOnInit() {
        this.route
            .params
            .subscribe(params => {
                this.showCategory = params['category']; // --> Name must match wanted paramter
        });
    }

    computeCategories() {
        let categories : { [id : string]: Entry[] } = {}
        for(let entry of this.dataService.library.entries) {
            if(!(entry.category in categories))
                categories[entry.category] = []
            
            categories[entry.category].push(entry)
        }

        this.entryByCategory = categories
    }

    isActive(entry : Entry) : boolean {

        if(this.showCategory == "all")
            return true
        else {
            return entry.category == this.showCategory
        }

    }

    ngAfterContentChecked() {
        /*$(document).ready(function(){
            (<any> $('ul.tabs')).tabs();
        });*/
    }

    get activeEntries() : Entry[] {
        if(this.showCategory == "all") {
            return this.dataService.library.entries
        } else {
            var othis = this
            return this.dataService.library.entries.filter((value) => {
                return value.category == othis.showCategory
            })
        }
    }
    
    get entries() : Entry[] {
        return this.dataService.library.entries
    }

    get categories() : string[] {
        let cats = []
        for(let category in this.entryByCategory) {
            cats.push(category)
        }
        return cats
    }
}