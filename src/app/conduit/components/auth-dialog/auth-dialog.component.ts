import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ConduitUserService } from '../../core/services/conduit-user.service';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent implements OnInit {
  email = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);  

  constructor(
    private dialogRef: MatDialogRef<AuthDialogComponent>,
    private userService: ConduitUserService
  ) { }

  ngOnInit(): void {
  }
  

  save() {
    if (this.email.errors || this.password.errors) {
      return;
    }
  
    let credentials = { "email": this.email.value, "password": this.password.value };
    console.log(credentials);
    this.userService
    .attemptAuth('login', credentials)
    .subscribe(
      data => { 
        this.dialogRef.close(null);
      },
      err => {
        console.log(err?.error);
        //this.isSubmitting = false;
      }
    );
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter an email' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' : '';
  }

}
