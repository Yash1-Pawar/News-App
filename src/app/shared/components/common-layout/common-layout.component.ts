import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/model/Category';

@Component({
  selector: 'app-common-layout',
  templateUrl: './common-layout.component.html',
  styleUrls: ['./common-layout.component.css']
})
export class CommonLayoutComponent implements OnInit {

  @Input() image: string = 'india.webp';
  @Input() heading: string = '';
  @Input() subCategorys: string[] = [];

  @Output() subCategoryEvent: EventEmitter<string> = new EventEmitter();

  headingBgc?: string = '#fff';
  followHover: boolean = false;
  followClick: boolean = false;
  activeSubcategory: string = 'Latest';

  map: Map<string, string> = new Map<string, string>();

  constructor() {
    this.map.set(Category.Health, '#5677fc');
    this.map.set(Category.Business, '#259b24');
    this.map.set(Category.Entertainment, '#7e57c2');
    this.map.set(Category.India, '#689f38');
    this.map.set(Category.Science, '#e91e63');
    this.map.set(Category.Sport, '#ef6c00');
    this.map.set(Category.Technology, '#039be5');
    this.map.set(Category.World, '#689f38');
  }

  ngOnInit(): void {
    this.headingBgc = this.map.get(this.heading);
  }


  subCategoryOnClick(subCategory: string) {
    if (this.activeSubcategory === subCategory) {
      return;
    }
    this.activeSubcategory = subCategory;
    this.subCategoryEvent.emit(subCategory);
  }

}
