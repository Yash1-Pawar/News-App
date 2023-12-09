import { Component, OnInit, Input } from '@angular/core';
import { Inews } from 'src/app/model/Inews';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  article!: Inews;

  active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
