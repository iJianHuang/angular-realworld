import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contactuser } from 'src/app/core/models/Contactuser';
import { ContactuserService } from 'src/app/core/services/contactuser.service';

const  SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  public isScreenSmall: boolean;
  users: Observable<Contactuser[]>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: ContactuserService,
    private router: Router
  ) { }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  ngOnInit(): void {
    this.breakpointObserver
    .observe([ `(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
    .subscribe((state: BreakpointState) => {
      this.isScreenSmall = state.matches;
    });

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
