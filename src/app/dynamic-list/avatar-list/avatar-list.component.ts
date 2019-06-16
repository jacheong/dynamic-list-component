import { Component, OnInit, Input } from '@angular/core';
import { AvatarList } from '../list-types/avatar-list';

@Component({
  selector: 'app-avatar-list',
  templateUrl: './avatar-list.component.html',
  styleUrls: ['./avatar-list.component.css']
})
export class AvatarListComponent implements OnInit {

  @Input() props: AvatarList;

  constructor() { }

  ngOnInit() {
  }

}