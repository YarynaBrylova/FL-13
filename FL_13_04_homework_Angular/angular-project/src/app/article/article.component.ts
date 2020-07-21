import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../app.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
//вказуємо, яку змінну ми приймаємо
//щоб показати, що дана змінна буде взята з-зовні, вказуємо декоратор
  @Input() article: Article;
  constructor() { }

  ngOnInit(): void {
  }

}
