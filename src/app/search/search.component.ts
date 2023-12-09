import { Component, OnInit } from '@angular/core';
import { Inews } from '../model/Inews';
import { NewsService } from '../services/news.service';
import { InewsResponse } from '../model/InewsResponse';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  isLoading: boolean = false;
  articles: Inews[]  = [];

  constructor(private newsService: NewsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    document.scrollingElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.fetchRealData(queryParams['query']);
    });
  }

  fetchRealData(query: string) {
    this.isLoading = true;
    this.newsService.getEverythingWithQuery(query, 1).subscribe({
      next: (data: InewsResponse) => {
        this.articles = data.articles;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

}
