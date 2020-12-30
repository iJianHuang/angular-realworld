import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'


import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { MainContentComponent } from './components/main-content/main-content.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'

import { ContactuserService } from '../core/services/contactuser.service';
import { ContactnotesComponent } from './components/contactnotes/contactnotes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component'

const routes: Routes = [
  { 
    path: '', 
    component: ContactmanagerAppComponent,
    children: [
      { path: ':id', component: MainContentComponent },
      { path: '', component: MainContentComponent }
    ] 
  },  
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    ContactnotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ContactuserService
  ]
})
export class ContactmanagerModule { }
