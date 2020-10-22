import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  breakpoint;
  breakpoint2;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit() {
    const control = new FormControl('email');
    console.log(control.value);     // 'some value'
    this.breakpoint = (window.innerWidth <= 1200) ? 1:2;
    this.breakpoint2 = (window.innerWidth <= 600) ? "0.8:1":"2:1";
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 1200) ? 1 : 2;
    this.breakpoint2 = (event.target.innerWidth <= 600) ? "0.8:1":"2:1";
  }

}
