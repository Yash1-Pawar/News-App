import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISourcesResponse, InewsResponse } from '../model/InewsResponse';
import { newsData } from './fakeData';
import { sourceData } from './fakeSourceData';
import { business } from './business';
import { entertainment } from './entertaiment';
import { health } from './health';
import { science } from './science';
import { sports } from './sports';
import { technology } from './technology';
import { Category } from '../model/Category';

@Injectable({
  providedIn: 'root'
})
export class FakeNewsService {

  data: string = JSON.stringify(newsData);
  sourceData: string = JSON.stringify(sourceData);
  business: string = JSON.stringify(business);
  entertainment: string = JSON.stringify(entertainment);
  health: string = JSON.stringify(health);
  science: string = JSON.stringify(science);
  sports: string = JSON.stringify(sports);
  technology: string = JSON.stringify(technology);

  constructor() { }

  getFakeData(): Observable<InewsResponse> {
    return new Observable((observer) => {
      observer.next(JSON.parse(this.data));
    });
  }

  getFakeSourceData(): Observable<ISourcesResponse> {
    return new Observable((observer) => {
      observer.next(JSON.parse(this.sourceData));
    });
  }

  getTopHeadLinesWithOnlyCategory(category: string): Observable<InewsResponse> {
    switch (category.toLowerCase()) {
      case Category.Business.toLowerCase():
        return new Observable((observer) => {
          observer.next(JSON.parse(this.business));
        });
        break;
      case Category.Entertainment.toLowerCase():
        return new Observable((observer) => {
          observer.next(JSON.parse(this.entertainment));
        });
        break;
      case Category.Health.toLowerCase():
        return new Observable((observer) => {
          observer.next(JSON.parse(this.health));
        });
        break;
      case Category.Science.toLowerCase():
        return new Observable((observer) => {
          observer.next(JSON.parse(this.science));
        });
        break;
      case Category.Sport.toLowerCase():
        return new Observable((observer) => {
          observer.next(JSON.parse(this.sports));
        });
        break;
      case Category.Technology.toLowerCase():
        return new Observable((observer) => {
          observer.next(JSON.parse(this.technology));
        });
        break;
      default:
        return new Observable((observer) => {
          observer.next(JSON.parse(this.data));
        });
        break;
    }
  }

}
