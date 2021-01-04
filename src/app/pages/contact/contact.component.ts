import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Contact } from './forms/contact';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  model = new Contact();
  submitted = false;
  error = {};

  registerForm: FormGroup;

  url=environment.EMAIL_URL;

  constructor(private http: HttpClient, public dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.registerForm= new FormGroup({
      name : new FormControl('', [
        Validators.required,
      ]),
      email : new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      phone : new FormControl(''),
      message : new FormControl('', [
        Validators.required,
      ])
    });
  }

  ngAfterViewInit() {
    // Hack: Scrolls to top of Page after page view initialized
    let top = document.getElementById('top');
    if (top !== null) {
      top.scrollIntoView();
      top = null;
    }
  }

  Submit(){
    
    if (this.registerForm.get("name").hasError('required') == false 
    && this.registerForm.get("email").hasError('required') == false 
    && this.registerForm.get("email").hasError('email') == false 
    && this.registerForm.get("message").hasError('required') == false){
      this.http.post(this.url,this.registerForm.getRawValue(), {responseType: 'text'}).toPromise().then(data => {
      //alert(data);
      this.dialog.open(DialogComponent, {
        data: {
          title:'Viestin lähetys onnistui',
          msg: data
        }
      });
      });
    }else{
      this.dialog.open(DialogComponent, {
        data: {
          title:'Viestin lähetys epäonnistui',
          msg: 'täytä kaikki vaadittavat kentät!'
        }
      });
    }
    
    
    
    this.submitted = true;
  }
}
