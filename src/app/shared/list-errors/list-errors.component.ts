import { Component, Input, OnInit } from '@angular/core';

import { Errors } from '../../core/models/errors.model';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.scss']
})
export class ListErrorsComponent implements OnInit {
  formattedErrors: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }  

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];

    if (errorList.errors) {
      for (let field in errorList.errors) {
        this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
      }
    }
  };

  get errorList() { return this.formattedErrors; }

}
