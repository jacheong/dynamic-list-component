import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { ListService } from './list.service';

@Injectable()
export class RouteResolverService implements Resolve<any> {

  constructor(
    private listService: ListService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    switch (state.url) {
      case '/home':
        return this.listService.getDefaultListData();
        break;
      case '/basic':
        return this.listService.getBasicListData();
        break;
      case '/action':
        return this.listService.getActionListData();
        break;
      case '/selection':
        return this.listService.getSelectionListData();
        break;
      case '/icon':
        return this.listService.getIconListData();
        break;
      case '/avatar':
        return this.listService.getAvatarListData();
        break;
      default:
        return this.listService.getDefaultListData();
        break;
    }
  }

}