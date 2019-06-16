import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ListTypes } from '../dynamic-list/list-types/list-types';

@Injectable()
export class ListService {

  constructor() { }

  getDefaultListData(): Observable<Object> {
    return of(
      {
        type: ListTypes.basic,
        items: [
          {
            label: 'Click on a list type from above!'
          },
        ]
      }
    );
  }

  getBasicListData(): Observable<Object> {
    return of(
      {
        type: ListTypes.basic,
        items: [
          {
            label: 'option 1'
          },
          {
            label: 'option 2'
          },
        ]
      }
    );
  }

  getActionListData(): Observable<Object> {
    return of(
      {
        type: ListTypes.action,
        items: [
          {
            label: 'Action 1',
            fn: () => { console.log("clicked option") }
          },
          {
            label: 'Action 2',
            fn: () => { console.log("clicked option") }
          },
        ]
      }
    );
  }

  getSelectionListData(): Observable<Object> {
    return of(
      {
        type: ListTypes.selection,
        items: [
          {
            label: 'option 1'
          },
          {
            label: 'option 2'
          },
        ]
      }
    );
  }

  getIconListData(): Observable<Object> {
    return of(
      {
        type: ListTypes.icon,
        items: [
          {
            label: 'Home',
            iconName: 'home'
          },
          {
            label: 'Favorite',
            iconName: 'favorite'
          },
        ]
      }
    );
  }

  getAvatarListData(): Observable<Object> {
    return of(
      {
        type: ListTypes.avatar,
        items: [
          {
            label: 'Person 1',
            alt: 'image 1',
            src: 'https://picsum.photos/200'
          },
          {
            label: 'Person 2',
            alt: 'image 2',
            src: 'https://picsum.photos/200'
          },
        ]
      }
    );
  }

}