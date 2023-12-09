import { Component, OnInit, Input } from '@angular/core';
import { Source } from 'src/app/model/ISources';

@Component({
  selector: 'app-source-card',
  templateUrl: './source-card.component.html',
  styleUrls: ['./source-card.component.css']
})
export class SourceCardComponent implements OnInit {

  @Input() source: Source = {
    "id": "google-news-in",
    "name": "Google News (India)",
    "description": "Comprehensive, up-to-date India news coverage, aggregated from sources all over the world by Google News.",
    "category": "general",
    "language": "en",
    "country": "in",
    url: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
