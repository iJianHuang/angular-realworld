// app
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { HttpClientModule } from '@angular/common/http';

// shared
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module'

// feature
import { ConduitAppComponent } from './conduit-app.component';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import { YourFeedComponent } from './components/your-feed/your-feed.component';

const routes: Routes = [
  { path: '', component: ConduitAppComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ConduitAppComponent, GlobalFeedComponent, YourFeedComponent],
  imports: [
    //CommonModule,
    //HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ConduitModule { }
