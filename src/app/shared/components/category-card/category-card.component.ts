import { Component, Input, OnInit } from '@angular/core';
import { Inews } from 'src/app/model/Inews';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  @Input() article!: Inews;

  constructor() { }

  ngOnInit(): void {
  }

}
