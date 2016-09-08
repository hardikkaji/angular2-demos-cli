import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  title = 'Course Management';

  // TODO: Move this to service;
  menuItems = [{
    name: 'Courses',
    link: '#'
  }];

}
