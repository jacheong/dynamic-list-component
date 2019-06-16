import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { DynamicListComponent } from './dynamic-list/dynamic-list.component';
import { BasicListComponent } from './dynamic-list/basic-list/basic-list.component';
import { ListBlueprintDirective } from './dynamic-list/list-blueprint.directive';
import { NavigationListComponent } from './dynamic-list/navigation-list/navigation-list.component';
import { ActionListComponent } from './dynamic-list/action-list/action-list.component';
import { SelectionListComponent } from './dynamic-list/selection-list/selection-list.component';
import { IconListComponent } from './dynamic-list/icon-list/icon-list.component';
import { AvatarListComponent } from './dynamic-list/avatar-list/avatar-list.component';
import { HomeComponent } from './home/home.component';
import { ListService } from './services/list.service';
import { RouteResolverService } from './services/route-resolver.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatListModule, MatIconModule,MatButtonModule, MatCardModule,AppRoutingModule ],
  declarations: [ AppComponent, DynamicListComponent, BasicListComponent, ListBlueprintDirective, NavigationListComponent, ActionListComponent, SelectionListComponent, IconListComponent, AvatarListComponent, HomeComponent ],
  entryComponents: [
    BasicListComponent,
    NavigationListComponent,
    ActionListComponent,
    SelectionListComponent,
    IconListComponent,
    AvatarListComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ListService, RouteResolverService],
})
export class AppModule { }
