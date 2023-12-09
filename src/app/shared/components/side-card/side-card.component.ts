import { Component, Input, OnInit } from '@angular/core';
import { Inews } from 'src/app/model/Inews';

@Component({
  selector: 'app-side-card',
  templateUrl: './side-card.component.html',
  styleUrls: ['./side-card.component.css']
})
export class SideCardComponent implements OnInit {
  
  @Input()
  article!: Inews

  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
