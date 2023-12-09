import { Component, OnInit } from '@angular/core';
import { Inews } from '../model/Inews';
import { InewsResponse } from '../model/InewsResponse';
import { NewsService } from '../services/news.service';
import { FakeNewsService } from '../services/fake-news.service';
import { countryMap } from '../services/CountryMapping';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {
  
  isLoading: boolean = false;
  articles: Inews[]  = [];
  country: string = 'us';
  category: string = 'world';
  countryData: any;
  selectedCountry: string = 'Select Country';

  countryDropDown: string[] = [];

  constructor(private newsService: NewsService, private fakeNewsService: FakeNewsService) {
    this.countryData = JSON.parse(JSON.stringify(countryMap));
    let countryStr = 'ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za'
    let countrys: string[] = countryStr.split(' ');

    for (const e of countrys) {
      this.countryDropDown.push(this.countryData[e.toUpperCase()]);
    }
    
  }

  ngOnInit(): void {
    document.scrollingElement?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.fetchRealData(this.country, 1);
  }

  dropDownSelect(country: string) {
    for (const [key, value] of Object.entries(this.countryData)) {
      if (value === country) {
        this.fetchRealData(key, 1);
        this.selectedCountry = value;
        break;
      }
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
  
  fetchRealData(country: string, pageNum: number) {
    this.isLoading = true;
    this.newsService.getTopHeadLinesWithCountry(country, pageNum).subscribe({
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
