import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }   from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-module';


import { AppComponent }  from './components/app.component';
import { UserPanelComponent } from './components/userpanel.component';
import { DashboardComponent } from './components/dashboard.component';
import { MarkdownComponent } from './components/markdown.component';
import { EntryViewerComponent } from './components/entry-viewer.component';
import { DataService } from './services/data.service';

import * as router from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, 
                  HttpModule,
                  AppRoutingModule,
                  FormsModule,
                ],
  declarations: [ AppComponent, 
                  UserPanelComponent, 
                  DashboardComponent,
                  EntryViewerComponent,
                  MarkdownComponent
                ],
  providers:    [
    DataService,
  ],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }