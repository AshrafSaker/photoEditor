

import {HeaderComponent} from '../header/header.component';
import { Component} from '@angular/core';
import { RouterOutlet, Routes } from '@angular/router';


import { RouterModule } from '@angular/router';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}


