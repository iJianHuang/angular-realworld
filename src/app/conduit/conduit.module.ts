import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms'


import { ConduitAppComponent } from './conduit-app.component';

const routes: Routes = [
  { path: '', component: ConduitAppComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [ConduitAppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ConduitModule { }
