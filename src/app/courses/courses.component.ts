import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'courses',
  templateUrl: 'courses.component.html'
})
export class CoursesComponent {
  title = 'Courses';
  courseName;
  courses: string[] = ['Course 1', 'Course 2', 'Course 3'];

  addCourse() {
    this.courses.push(this.courseName);
  }
}
