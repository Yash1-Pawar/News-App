import { Component, OnInit } from '@angular/core';
import { Inews } from '../model/Inews';
import { NewsService } from '../services/news.service';
import { InewsResponse } from '../model/InewsResponse';
import { FakeNewsService } from '../services/fake-news.service';
import { Router } from '@angular/router';
import { Isource } from '../model/Isource';
import { Source } from '../model/ISources';
import { Observable } from 'rxjs';
import { Category } from '../model/Category';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  todayDate: Date = new Date();
  noOfTopPicks: number = 6;
  articles: Inews[] = [];
  // topPicks: Inews[] = [];
  sources: Source[] = [];
  isLoading: boolean = false;

  forYouCards: string[] = ['India', 'World', 'Entertainment', 'Health', 'Science', 'Sports'];

  india: Inews[] = [];
  world$: Observable<InewsResponse> = this.newsService.getTopHeadLinesWithCountry('us', 1);
  entertainment$: Observable<InewsResponse> = this.newsService.getTopHeadLinesWithCountryCategory('in', Category.Entertainment, 1);
  health$: Observable<InewsResponse> = this.newsService.getTopHeadLinesWithCountryCategory('in', Category.Health, 1);
  science$: Observable<InewsResponse> = this.newsService.getTopHeadLinesWithCountryCategory('in', Category.Science, 1);
  sports$: Observable<InewsResponse> = this.newsService.getTopHeadLinesWithCountryCategory('in', Category.Sport, 1);

  constructor(private newsService: NewsService,
    private fakeNewsService: FakeNewsService,
    private router: Router) { }

  ngOnInit(): void {
    document.scrollingElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.fetchRealData();
    this.newsService.getAllSources().subscribe({
      next: (data) => this.sources = data.sources,
      error: (error) => console.error(error)
    });
  }

  // fecthTopPicks() {
  //   let startInd = Math.floor(Math.random() * 10);
  //   this.topPicks = this.articles.slice(startInd, startInd + this.noOfTopPicks);
  // }

  fetchRealData() {
    this.isLoading = true;
    this.newsService.getTopHeadLinesWithCountry('in', 1).subscribe({
      next: (data: InewsResponse) => {
        this.articles = data.articles;
        this.india = data.articles;
        // this.fecthTopPicks();
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

  forYouCardClick(forYouCard: string) {
    this.router.navigate([forYouCard.toLowerCase()]);
  }

  randomNum(): number {
    return Math.floor(Math.random() * this.articles.length);
  }

}
