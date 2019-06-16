import { 
  Directive,
  OnInit,
  Input,
  ComponentFactoryResolver,
  ViewContainerRef,
} from '@angular/core';

import { BasicListComponent } from './basic-list/basic-list.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { ListTypes } from './list-types/list-types';
import { BasicList } from './list-types/basic-list';
import { NavigationList } from './list-types/navigation-list';
import { ActionListComponent } from './action-list/action-list.component';
import { ActionList } from './list-types/action-list';
import { SelectionList } from './list-types/selection-list';
import { SelectionListComponent } from './selection-list/selection-list.component';
import { IconList } from './list-types/icon-list';
import { IconListComponent } from './icon-list/icon-list.component';
import { AvatarList } from './list-types/avatar-list';
import { AvatarListComponent } from './avatar-list/avatar-list.component';

let componentMapper: {[key: string]: any} = {};
componentMapper[ListTypes.basic] = BasicListComponent;
componentMapper[ListTypes.navigation] = NavigationListComponent;
componentMapper[ListTypes.action] = ActionListComponent;
componentMapper[ListTypes.selection] = SelectionListComponent;
componentMapper[ListTypes.icon] = IconListComponent;
componentMapper[ListTypes.avatar] = AvatarListComponent;


@Directive({
  selector: '[appListBlueprint]'
})
export class ListBlueprintDirective implements OnInit {

  @Input() props: Object;
  componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      componentMapper[this.props['type']]
    );
    this.componentRef = this.viewContainerRef.createComponent(factory);

    switch(this.props['type']) {
      case ListTypes.basic:
        this.componentRef.instance.props = new BasicList(this.props);
        break;
      case ListTypes.navigation:
        this.componentRef.instance.props = new NavigationList(this.props);
        break;
      case ListTypes.action:
        this.componentRef.instance.props = new  ActionList(this.props);
        break;
      case ListTypes.selection:
        this.componentRef.instance.props = new  SelectionList(this.props);
        break;
      case ListTypes.icon:
        this.componentRef.instance.props = new  IconList(this.props);
        break;
      case ListTypes.avatar:
        this.componentRef.instance.props = new  AvatarList(this.props);
        break;
      default:
        this.componentRef.instance.props = new BasicList(this.props);
        break;
    }
  }

}