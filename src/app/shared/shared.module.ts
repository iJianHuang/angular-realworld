import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ListErrorsComponent } from './list-errors/list-errors.component';


@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
  ],
  declarations: [ListErrorsComponent],
  exports: [
    CommonModule,
    FormsModule,
    ListErrorsComponent
  ]
})
export class SharedModule {}