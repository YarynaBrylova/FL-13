import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../app.component';


@Component({
  selector: 'app-short-article',
  templateUrl: './short-article.component.html',
  styleUrls: ['./short-article.component.css']
})
export class ShortArticleComponent implements OnInit {

  @Input() article: Article
  constructor() { }

  ngOnInit(): void {
  }

}
