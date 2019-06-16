import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ListService } from './list.service';

@Injectable()
export class RouteResolverService implements Resolve<any> {

  constructor(
    private listService: ListService
  ) { }

  resolve() {
    return this.listService.getBasicListData();
  }

}