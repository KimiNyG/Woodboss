import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  breakpoint = 2;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 500) ? 1:5;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 500) ? 1 : 5;
  }

}
