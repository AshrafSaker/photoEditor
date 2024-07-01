import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { title } from 'process';

const routes: Routes = [
  { path: '', title:'Home Page',component: HomeComponent },
  { path: 'home',title:'Home Page', component: HomeComponent },
  { path: 'contacts',title:'Contact Us', component: ContactsComponent },
  { path: 'test',title:'Test', component: TestComponent },
  { path: '**',title:'Erorr', component: NotFoundComponent },
];



bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
},)
