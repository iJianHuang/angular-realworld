import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Contactuser } from 'src/app/contactmanager/core/models/contactuser';
import { ContactuserService } from 'src/app/contactmanager/core/services/contactuser.service';
import { StateBagService } from 'src/app/core/services/state-bag.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isScreenSmall: boolean;
  users: Observable<Contactuser[]>;

  constructor(
    private userService: ContactuserService,
    private router: Router,
    private stateBagService: StateBagService
  ) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.stateBagService
    .isScreenSmall$
    .subscribe(isScreenSmallState => this.isScreenSmall = isScreenSmallState);

    this.users = this.userService.users;
    this.userService.loadAll();

    this.users.subscribe(data => {
      if (data.length > 0) {
        this.router.navigate(['/contactmanager', data[0].id]);
      }
    });

    this.router.events.subscribe(() => {
      if (this.isScreenSmall) {
        this.sidenav.close();
      }
    });
  }
}
