import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  template:'<h1 id="title">{{title}}</h1>',
  styleUrl: './header.component.css',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  title = 'My Notes';
}
