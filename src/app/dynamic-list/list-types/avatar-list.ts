import { ListTypes } from './list-types';

export class AvatarListItem {
  label: string;
  alt: string;
  src: string;
}

export class AvatarList {
  type: string;
  items: AvatarListItem[];

  constructor(obj: any = {}) {
    this.type = ListTypes.navigation;
    this.items = obj && obj.items ? obj.items : [];
  }
}