import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Contactuser } from 'src/app/contactmanager/core/models/contactuser';
import { ContactuserService } from '../../core/services/contactuser.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  user: Contactuser;
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ];

  constructor(
    private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: ContactuserService) { }

  ngOnInit(): void {
    this.user = new Contactuser();
  }

  save() {
    if (this.name.errors) {
      return;
    }
    this.user.name = this.name.value;
    this.userService
    .addUser(this.user)
    .then(user => {
      this.dialogRef.close(this.user);
    });    
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  name = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return this.name.hasError('required') ? 'You must enter a name' : '';
  }
}
