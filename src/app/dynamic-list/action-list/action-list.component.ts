import { Component, OnInit, Input } from '@angular/core';
import { ActionList } from '../list-types/action-list';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit {

  @Input() props: ActionList;

  constructor() { }

  ngOnInit() {
  }

}