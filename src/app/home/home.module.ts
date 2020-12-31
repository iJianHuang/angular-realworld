// app
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// shared
import { SharedModule } from '../shared/shared.module'; 
import { MaterialModule } from '../shared/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';

// feature
import { HomeComponent } from './home.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}