import { NgModule } from '@angular/core';
//import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared'; 

const routes: Routes = [{
  path: '',
  component: HomeComponent
}];

// const homeRouting: ModuleWithProviders = RouterModule.forChild([
//   {
//     path: '',
//     component: HomeComponent
//   }
// ]);

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    //homeRouting,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}