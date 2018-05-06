import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Greeting } from '../greeting';
import { HomeService } from '../home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  greeting: Greeting;
 
  constructor(private router: Router, private homeService: HomeService) {
    this.greeting = { id: 0, content: ""};
  }
 
  ngOnInit() {
    this.homeService.greet().subscribe(response => {
      // display its headers
      const keys = response.headers.keys();

      // access the body directly, which is typed as `Greeting`.
      this.greeting = { ... response.body }
    });
  }
 
}