import { ListTypes } from './list-types';

export class NavigationListItem {
  label: string;
  url: string;
}

export class NavigationList {
  type: string;
  items: NavigationListItem[];

  constructor(obj: any = {}) {
    this.type = ListTypes.navigation;
    this.items = obj && obj.items ? obj.items : [];
  }
}