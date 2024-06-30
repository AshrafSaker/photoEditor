import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
];



bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
},)
