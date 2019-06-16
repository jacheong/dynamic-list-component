import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ListTypes } from '../dynamic-list/list-types/list-types';

@Injectable()
export class ListService {

  constructor() { }

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

}