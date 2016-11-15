import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header',
  templateUrl: 'header.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
  title = 'Course Management';

  // TODO: Move this to service;
  menuItems = [{
    name: 'Courses',
    routeName: 'courses'
  }];

}
