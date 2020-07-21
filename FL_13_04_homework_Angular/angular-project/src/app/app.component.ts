import { Component } from '@angular/core';

//описуємо типи майбутніх обєктів
export interface Article{
  title: string,
  description: string,
  content: string,
  date: string,
  author: string,
  source: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //create array of articles type of Arcticle, [] - show that it's array
  articles: Article[] = [
    {
      title: 'title1',
      description: 'description1',
      content: 'content1',
      date: '28/07/2020',
      author: 'Yaryna',
      source: 'learning'
    },
    {
      title: 'title2',
      description: 'description2',
      content: 'content2',
      date: '25/07/2020',
      author: 'Yaryna',
      source: 'lsport'
    }
  ]

  updateArticles(article: Article) {
    this.articles.unshift(article)
  }
}
