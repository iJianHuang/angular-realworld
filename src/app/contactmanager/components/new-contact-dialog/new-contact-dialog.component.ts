import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Contactuser } from 'src/app/core/models/Contactuser';

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

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>) { }

  ngOnInit(): void {
    this.user = new Contactuser();
  }

  save() {
    this.dialogRef.close(this.user);
  }

  dismiss() {
    this.dialogRef.close(null);
  }
}
