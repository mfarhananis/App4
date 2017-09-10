import { DataService } from './../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  dataInput: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  showData() {
    console.log(this.dataService.getData());
    this.dataInput = this.dataService.getData();
  }

}
