import { Component, OnInit } from '@angular/core';
import { Inews } from '../model/Inews';
import { InewsResponse } from '../model/InewsResponse';
import { NewsService } from '../services/news.service';
import { FakeNewsService } from '../services/fake-news.service';

@Component({
  selector: 'app-india',
  templateUrl: './india.component.html',
  styleUrls: ['./india.component.css']
})
export class IndiaComponent implements OnInit {

  isLoading: boolean = false;
  articles: Inews[]  = [];
  country: string = 'in';
  category: string = 'india';

  constructor(private newsService: NewsService, private fakeNewsService: FakeNewsService) { }

  ngOnInit(): void {
    document.scrollingElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.fetchRealData();
  }

  onSubCategoryClick(subCategory: string) {
    // this.fetchRealData();
    // this.articles.shift();
  }

  fetchFakeData() {
    this.isLoading = true;
    this.fakeNewsService.getFakeData().subscribe({
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
  
  fetchRealData() {
    this.isLoading = true;
    this.newsService.getTopHeadLinesWithCountry(this.country, 1).subscribe({
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

  // fetchRealDataSub(country:string, category:string, subCategory:string, pageNum:number) {
  //   this.isLoading = true;
  //   this.newsService.getTopHeadLinesWithQuery(this.country, this.category, subCategory, pageNum).subscribe({
  //     next: (data: InewsResponse) => {
  //       this.articles = data.articles;
  //       this.isLoading = false;
  //     },
  //     error: (error) => {
  //       console.log(error);
  //       this.isLoading = false;
  //     }
  //   });
  // }

}
