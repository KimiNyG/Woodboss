import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  breakpoint;
  breakpoint2;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1:2;
    this.breakpoint2 = (window.innerWidth <= 600) ? "0.8:1":"2:1";
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 2;
    this.breakpoint2 = (window.innerWidth <= 600) ? "0.8:1":"2:1";
  }

}
