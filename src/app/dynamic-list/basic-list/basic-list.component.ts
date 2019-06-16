import { Component, OnInit, Input } from '@angular/core';
import { BasicList } from '../list-types/basic-list';

@Component({
  selector: 'app-basic-list',
  templateUrl: './basic-list.component.html',
  styleUrls: ['./basic-list.component.css']
})
export class BasicListComponent implements OnInit {

  @Input() props: BasicList;

  constructor() { }

  ngOnInit() {
  }

}