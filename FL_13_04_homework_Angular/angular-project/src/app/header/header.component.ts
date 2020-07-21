import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
// import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { 
  }

  createArticle() {
    this.router.navigate(['/create']);
  }

  ngOnInit(): void {
  }

}
