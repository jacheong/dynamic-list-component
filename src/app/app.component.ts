import { Component, OnInit } from '@angular/core';
import { ListTypes } from './dynamic-list/list-types/list-types';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  isLoading: boolean;
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
      {
        label: 'Selection',
        url: '/selection'
      },
      {
        label: 'Icon',
        url: '/icon'
      },
      {
        label: 'Avatar',
        url: '/avatar'
      },
    ]
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.isLoading = true;
      }

      if (
        event instanceof NavigationCancel ||
        event instanceof NavigationEnd ||
        event instanceof NavigationError
      ) {
        this.isLoading = false;
      }
    });
  }
}
