import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ HeaderComponent ]
})
export class AppComponent {
  title = 'Course Mangement';
}
