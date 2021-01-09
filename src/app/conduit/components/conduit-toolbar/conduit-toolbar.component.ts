import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConduitUser } from 'src/app/conduit/core/models/conduit-user.model';
import { StateBagService } from 'src/app/core/services/state-bag.service';
import { ConduitUserService } from '../../core/services/conduit-user.service';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';

@Component({
  selector: 'app-conduit-toolbar',
  templateUrl: './conduit-toolbar.component.html',
  styleUrls: ['./conduit-toolbar.component.scss']
})
export class ConduitToolbarComponent implements OnInit {
  isScreenSmall: boolean = false;
  isAuthenticated: boolean = false;
  currentUser: ConduitUser;

  constructor(
    private stateBagService: StateBagService,
    private dialog: MatDialog,
    private userService: ConduitUserService
  ) { }

  ngOnInit(): void {
    this.userService.populate();

    this.stateBagService
    .isScreenSmall$
    .subscribe(isScreenSmallState => this.isScreenSmall = isScreenSmallState);

    this.userService
    .isAuthenticated$
    .subscribe(isAuthenticatedState => this.isAuthenticated = isAuthenticatedState);

    this.userService
    .currentUser$
    .subscribe(user => this.currentUser = user);
  }

  openAuthDialog(): void {
    let dialogRef = this.dialog.open(AuthDialogComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);

      if (result) {
        // this.openSnackBar("Contact added", "Navigate")
        // .onAction()
        // .subscribe(() => {
        //   this.router.navigate(['/contactmanager', result.id]);
        // });
      }
    });
  }

  signOut(): void {
    this.userService.purgeAuth();
  }

}
