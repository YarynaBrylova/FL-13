import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Article} from '../app.component'
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  //to pass someting outside use @output 
  //create variable onAdd type of EventEmitter with generic type Article
  @Output() onAdd: EventEmitter<Article> = new EventEmitter<Article>()

  title = '';
  description = '';
  content= '';
  date= '';
  author= '';
  source= '';

  constructor() { }

  ngOnInit(): void {
  }

  addArticle() {
    if(this.title.trim() &&
      this.description.trim() &&
      this.content.trim() &&
      this.date &&
      this.author &&
      this.source) {
        const article: Article ={
          title : this.title,
          description : this.description,
          content : this.content,
          date : this.date,
          author : this.author,
          source : this.source
        } 
        //variable article we should pass to app-component (@output)
        //emit call when wewant to send data outside, emit accept variable that we want to send outside => 
        // we will send data to parent component but we should accept them
        this.onAdd.emit(article)

        this.title = this.description = this.content = this.date = this.author = this.source = '';
      }
  }

}
