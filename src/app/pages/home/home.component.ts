import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  breakpoint;
  breakpoint2;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 1000) ? 1 : 4;
    this.breakpoint2 = (window.innerWidth <= 500) ? "300px":"645px";
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 4;
    this.breakpoint2 = (event.target.innerWidth <= 500) ? "300px":"645px";
  }

}
