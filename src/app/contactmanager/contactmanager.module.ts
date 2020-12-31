// app
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// shared
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module'
import { ReactiveFormsModule } from '@angular/forms'

// feature
import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'
import { MainContentComponent } from './components/main-content/main-content.component'
import { SidenavComponent } from './components/sidenav/sidenav.component'

import { ContactnotesComponent } from './components/contactnotes/contactnotes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component'

import { ContactuserService } from './core/services/contactuser.service';

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
    SharedModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ContactuserService
  ]
})
export class ContactmanagerModule { }
