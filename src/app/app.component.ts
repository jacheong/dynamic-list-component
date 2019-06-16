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
    type: ListTypes.avatar,
    items: [
      {
        src: 'https://picsum.photos/200/200',
        alt: 'favorite',
        label: 'option 1'
      },
      {
        src: 'https://picsum.photos/200/200',
        alt: 'favorite',
        label: 'option 2'
      },
    ]
  };
}
