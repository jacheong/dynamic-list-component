import { Component, OnInit, Input } from '@angular/core';
import { NavigationList } from '../list-types/navigation-list';


@Component({
  selector: 'app-navigation-list',
  templateUrl: './navigation-list.component.html',
  styleUrls: ['./navigation-list.component.css']
})
export class NavigationListComponent implements OnInit {

  @Input() props: NavigationList;

  constructor() { }

  ngOnInit() {
  }

}