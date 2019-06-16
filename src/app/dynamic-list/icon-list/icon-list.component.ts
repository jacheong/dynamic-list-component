import { Component, OnInit, Input } from '@angular/core';
import { IconList } from '../list-types/icon-list';

@Component({
  selector: 'app-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class IconListComponent implements OnInit {

  @Input() props: IconList;

  constructor() { }

  ngOnInit() {
  }

}