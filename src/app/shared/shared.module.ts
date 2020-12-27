import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { ListErrorsComponent } from './list-errors/list-errors.component';

import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    //HttpModule,
    RouterModule
  ],
  declarations: [ListErrorsComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpModule,
    ListErrorsComponent,
    RouterModule
  ]
})
export class SharedModule {}