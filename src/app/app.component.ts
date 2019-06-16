import { Component } from '@angular/core';
import { ListTypes } from './dynamic-list/list-types/list-types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  navList = {
    type: ListTypes.navigation,
    items: [
      {
        label: 'Home',
        url: '/home'
      },
            {
        label: 'Basic',
        url: '/basic'
      },
            {
        label: 'Action',
        url: '/action'
      },
    ]
  };
}
