import { FormControl, FormsModule } from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  { ReactiveFormsModule } from '@angular/forms';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  login() {

    alert("Welcome");
  }

  isRed = false;
  upperClass = ['uppercase'];
  change() {
    this.isRed = !this.isRed;
    console.log("changed");
  }
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
  }

  //formcontrol
  formName = new FormControl('');
  color = new FormControl('Red');
  showFormControl(){
    console.log(this.formName.value)
    console.log(this.color.value)
  }
}


