import { ListTypes } from './list-types';

export class ActionListItem {
  label: string;
  fn: () => any;
}

export class ActionList {
  type: string;
  items: ActionListItem[];

  constructor(obj: any = {}) {
    this.type = ListTypes.action;
    this.items = obj && obj.items ? obj.items : [];
  }
}