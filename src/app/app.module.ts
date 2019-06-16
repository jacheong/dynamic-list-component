import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { BasicListComponent } from './dynamic-list/basic-list/basic-list.component';
import { ListBlueprintDirective } from './dynamic-list/list-blueprint.directive';
import { NavigationListComponent } from './dynamic-list/navigation-list/navigation-list.component';
import { ActionListComponent } from './dynamic-list/action-list/action-list.component';
import { SelectionListComponent } from './dynamic-list/selection-list/selection-list.component';
import { IconListComponent } from './dynamic-list/icon-list/icon-list.component';
import { AvatarListComponent } from './dynamic-list/avatar-list/avatar-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatListModule, MatIconModule,MatButtonModule ],
  declarations: [ AppComponent, DynamicListComponent, BasicListComponent, ListBlueprintDirective, NavigationListComponent, ActionListComponent, SelectionListComponent, IconListComponent, AvatarListComponent ],
  entryComponents: [
    BasicListComponent,
    NavigationListComponent,
    ActionListComponent,
    SelectionListComponent,
    IconListComponent,
    AvatarListComponent
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
