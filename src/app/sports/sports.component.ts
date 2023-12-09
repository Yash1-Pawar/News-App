import { Component, OnInit } from '@angular/core';
import { Inews } from '../model/Inews';
import { InewsResponse } from '../model/InewsResponse';
import { NewsService } from '../services/news.service';
import { FakeNewsService } from '../services/fake-news.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  isLoading: boolean = false;
  articles: Inews[]  = [];
  country: string = 'in';
  category: string = 'sports';
  subCategorys: string[] = ['Latest', 'Cricket', 'Hockey', 'Football', 'Tennis', 'Kabbadi', 'F1 Racing'];

  constructor(private newsService: NewsService, private fakeNewsService: FakeNewsService) { }

  ngOnInit(): void {
    document.scrollingElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.fetchRealData();
  }

  onSubCategoryClick(subCategory: string) {
    if(subCategory === this.subCategorys[0]) {
      this.fetchRealData();
    } else {
      this.fetchRealDataSub(this.country, this.category, subCategory, 1);
    }
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
    this.newsService.getTopHeadLinesWithCountryCategory(this.country, this.category, 1).subscribe({
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

  fetchRealDataSub(country:string, category:string, subCategory:string, pageNum:number) {
    this.isLoading = true;
    this.newsService.getTopHeadLinesWithQuery(this.country, this.category, subCategory, pageNum).subscribe({
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
