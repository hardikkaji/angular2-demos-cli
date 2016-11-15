import { provideRouter, RouterConfig } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';


export const routes: RouterConfig = [
  { path: 'courses', component: CoursesComponent },
  { path: '', component: HomeComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
