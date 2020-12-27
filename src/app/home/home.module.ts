import { NgModule } from '@angular/core';
//import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MaterialModule } from '../shared/material.module'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'

import { HomeComponent } from './home.component';
import { SharedModule } from '../shared'; 


const routes: Routes = [{
  path: 'home',
  component: HomeComponent
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {}