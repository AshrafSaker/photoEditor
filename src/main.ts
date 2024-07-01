import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter,Routes} from '@angular/router'
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'test', component: TestComponent },
  { path: '**', component: NotFoundComponent },
];



bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
},)
