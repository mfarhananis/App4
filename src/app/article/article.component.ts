import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  myTitle: string;
  isStale = false;

  constructor() { }

  ngOnInit() {
  }

  setTitle(title: string): void {
    this.myTitle = title;
  }

  checkStale(val: string): void {
    this.isStale = val !== this.myTitle;
    console.log('Key up ...');
  }

}
