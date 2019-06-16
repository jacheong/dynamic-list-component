import { ListTypes } from './list-types';

export class SelectionListItem {
  label: string;
}

export class SelectionList {
  type: string;
  items: SelectionListItem[];

  constructor(obj: any = {}) {
    this.type = ListTypes.navigation;
    this.items = obj && obj.items ? obj.items : [];
  }
}