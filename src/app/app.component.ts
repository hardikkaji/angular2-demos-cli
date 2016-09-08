import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent, CoursesComponent ]
})
export class AppComponent {
  title = 'Course Mangement';
}
