import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay } from 'rxjs';
import { ISourcesResponse, InewsResponse } from '../model/InewsResponse';
import { newsData } from './fakeData';
import { FakeNewsService } from './fake-news.service';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  useApi: boolean = false;

  data: string = JSON.stringify(newsData);

  baseUrl: string = "https://newsapi.org/v2/";

  apiHeaders = {
    headers: {
      'X-Api-Key': '08a07f1b9f5940cfa7aed9419da67805'
    }, params: {
      pageSize: 50,
      page: 1
    }
  }

  constructor(private httpClient: HttpClient, private fakeNewsService: FakeNewsService) { }

  getTopHeadLinesWithCountryCategory(country: string, category: string, pageNum: number): Observable<InewsResponse> {
    if (!this.useApi) {
      return this.fakeNewsService.getTopHeadLinesWithOnlyCategory(category).pipe(delay(500));
    }
    let params = {
      ...this.apiHeaders.params,
      category: category,
      country: country,
      page: pageNum
    }
    const options = {
      ...this.apiHeaders, params
    }
    return this.httpClient.get<InewsResponse>(this.baseUrl + 'top-headlines', options);
  }

  getTopHeadLinesWithOnlyCategory(category: string, pageNum: number): Observable<InewsResponse> {
    if (!this.useApi) {
      return this.fakeNewsService.getTopHeadLinesWithOnlyCategory(category).pipe(delay(500));
    }
    let params = {
      ...this.apiHeaders.params,
      category: category,
      page: pageNum
    }
    const options = {
      ...this.apiHeaders, params
    }
    return this.httpClient.get<InewsResponse>(this.baseUrl + 'top-headlines', options);
  }

  getTopHeadLinesWithCountry(country: string, pageNum: number): Observable<InewsResponse> {
    if (!this.useApi) {
      return this.fakeNewsService.getFakeData().pipe(delay(500));
    }
    let params = {
      ...this.apiHeaders.params,
      country: country,
      page: pageNum
    }
    const options = {
      ...this.apiHeaders, params
    }
    return this.httpClient.get<InewsResponse>(this.baseUrl + 'top-headlines', options);
  }

  getTopHeadLinesWithQuery(country: string, category: string, query: string, pageNum: number): Observable<InewsResponse> {
    if (!this.useApi) {
      return this.fakeNewsService.getTopHeadLinesWithOnlyCategory(category).pipe(delay(500));
    }
    let params = {
      ...this.apiHeaders.params,
      category: category,
      country: country,
      q: query,
      page: pageNum
    }
    const options = {
      ...this.apiHeaders, params
    }
    return this.httpClient.get<InewsResponse>(this.baseUrl + 'top-headlines', options);
  }

  getAllSources(): Observable<ISourcesResponse> {
    if (!this.useApi) {
      return this.fakeNewsService.getFakeSourceData().pipe(delay(500));
    }
    let params = {}
    const options = {
      ...this.apiHeaders, params
    }
    return this.httpClient.get<ISourcesResponse>(this.baseUrl + 'sources', options);
  }

  getEverythingWithQuery(query: string, pageNum: number): Observable<InewsResponse> {
    if (!this.useApi) {
      return this.fakeNewsService.getTopHeadLinesWithOnlyCategory(query).pipe(delay(500));
    }
    let params = {
      q: query,
      page: pageNum,
      pageSize: 20
    }
    const options = {
      ...this.apiHeaders, params
    }
    return this.httpClient.get<InewsResponse>(this.baseUrl + 'everything', options);
  }
}
