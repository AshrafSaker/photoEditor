import {HeaderComponent} from '../header/header.component';
import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
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
}


