import { Component } from '@angular/core';
import { ListTypes } from './dynamic-list/list-types/list-types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  list = {
    type: ListTypes.icon,
    items: [
      {
        iconName: 'favorite',
        label: 'option 1'
      },
      {
        iconName: 'home',
        label: 'option 2'
      },
    ]
  };
}
