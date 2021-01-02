import { Component, OnInit } from '@angular/core';
import { Article } from '../../core/models/article.model';
import { GlobalFeedService } from '../../core/services/global-feed.service';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent implements OnInit {  
  articles: Article[];  

  constructor(private globalFeedService:  GlobalFeedService) { }

  ngOnInit(): void {
    this.globalFeedService.getArticles().subscribe(
      data =>
      {
        this.articles = data.articles;
      });
  }
}
