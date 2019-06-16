import { ListTypes } from './list-types';

export class BasicListItem {
  label: string;
}

export class BasicList {
  type: string;
  items: BasicListItem[];

  constructor(obj: any = {}) {
    this.type = ListTypes.basic;
    this.items = obj && obj.items ? obj.items : [];
  }
}