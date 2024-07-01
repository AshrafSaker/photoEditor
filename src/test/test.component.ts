import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl, FormsModule } from '@angular/forms';
import  { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
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
