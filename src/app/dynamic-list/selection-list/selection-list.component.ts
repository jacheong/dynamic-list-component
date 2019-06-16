import { Component, OnInit, Input } from '@angular/core';
import { SelectionList } from '../list-types/selection-list';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.css']
})
export class SelectionListComponent implements OnInit {

  @Input() props: SelectionList;

  constructor() { }

  ngOnInit() {
  }

}