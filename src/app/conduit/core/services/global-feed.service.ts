import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalFeedService {

  constructor(
    private apiService: ApiService,
    private http: HttpClient
  ) { }

  // https://conduit.productionready.io/api/articles?limit=10&offset=0
  getArticles(): Observable<any> {
    return this.apiService.getConduit('/articles');
  }
}
