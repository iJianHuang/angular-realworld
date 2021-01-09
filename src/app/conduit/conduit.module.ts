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
import { ConduitToolbarComponent } from './components/conduit-toolbar/conduit-toolbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConduitMainContentComponent } from './components/conduit-main-content/conduit-main-content.component';
import { AuthDialogComponent } from './components/auth-dialog/auth-dialog.component';

const routes: Routes = [
  { 
    path: '', 
    component: ConduitAppComponent,
    children: [
      // { path: 'login', component: AuthComponent },
      // { path: 'register', component: AuthComponent },
      { path: '', component: ConduitMainContentComponent }
    ] 
  },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    ConduitAppComponent, 
    GlobalFeedComponent, 
    YourFeedComponent, 
    ConduitToolbarComponent,
    //AuthComponent,
    ConduitMainContentComponent,
    AuthDialogComponent
  ],
  imports: [
    //CommonModule,
    //HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ConduitModule { }
