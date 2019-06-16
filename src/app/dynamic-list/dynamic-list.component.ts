import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-list',
  templateUrl: './dynamic-list.component.html',
  styleUrls: ['./dynamic-list.component.css']
})
export class DynamicListComponent implements OnInit {

  @Input() props: Object;

  constructor() { }

  ngOnInit() {
  }

}