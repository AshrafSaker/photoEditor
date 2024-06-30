
import { FormControl, FormsModule } from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import { Component} from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';
import  { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
];

bootstrapApplication(AppComponent);





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  login() {

    alert("Welcome");
  };

  isRed = false;
  upperClass = ['uppercase'];
  change() {
    this.isRed = !this.isRed;
    console.log("changed");
  };
  imageURL = 'https://www.sololearn.com/images/tree.jpg';
  imgAlt = 'Tree';

  isHighlighted = true;
  myClasses = ['highlight', 'uppercase'];

  products = ['apple', 'orange', 'banana'];
  name = '';
  password = '';
  username = '';
  showName(){
    console.log(this.username);
  };

  //formcontrol
  formName = new FormControl('');
  color = new FormControl('Red');
  showFormControl(){
    console.log(this.formName.value)
    console.log(this.color.value)
  };

  //FormGroup
  formLogin = new FormGroup({
    user: new FormControl('',Validators.required),
    pass: new FormControl(''),
  });
  groupForm(){
    console.log(this.formLogin.value.user + '|'+this.formLogin.value.pass)
  };
}


