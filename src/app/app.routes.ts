import { provideRouter, RouterConfig } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';


export const routes: RouterConfig = [
  { path: 'courses', component: CoursesComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
