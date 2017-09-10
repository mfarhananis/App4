import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-article-editor',
  templateUrl: './article-editor.component.html',
  styleUrls: ['./article-editor.component.css']
})
export class ArticleEditorComponent implements OnInit {

  title: string;
  titleControl: FormControl = new FormControl(null, Validators.required);

  constructor() { }

  ngOnInit() {
  }

  submitTitle() {
    if (this.titleControl.valid) {
      this.title = this.titleControl.value;
    } else {
      alert('Title Required.');
    }
  }

}
