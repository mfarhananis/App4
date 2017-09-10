import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DataService {

    restData: Object;

    constructor(private http: Http) {
    }

    getData(): Object {
        this.http.request('http://jsonplaceholder.typicode.com/posts/1').subscribe((res: Response) => {
            this.restData = res.json();
            console.log(res.json());
            console.log(res.status);
        });
        return this.restData;
    }

}