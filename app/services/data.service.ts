import { Injectable }       from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Observable }       from 'rxjs/Rx';
import { Inject }           from '@angular/core';
import { library, Library }          from '../entries/common' 

import '../entries/index'

@Injectable()
export class DataService {
    library : Library

    public constructor() {
        this.library = library
    }
}