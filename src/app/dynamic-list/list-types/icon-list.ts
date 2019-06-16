import { ListTypes } from './list-types';

export class IconListItem {
  iconName: string;
  label: string;
}

export class IconList {
  type: string;
  items: IconListItem[];

  constructor(obj: any = {}) {
    this.type = ListTypes.navigation;
    this.items = obj && obj.items ? obj.items : [];
  }
}