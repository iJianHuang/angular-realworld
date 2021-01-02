import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StateBagService } from '../../core/services/state-bag.service'

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleThemeClicked = new EventEmitter<void>();
  isScreenSmall: boolean = false;

  constructor(
    private stateBagService: StateBagService,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state: BreakpointState) => {
        this.isScreenSmall = state.matches;
        this.stateBagService.setScreenSmall(this.isScreenSmall);
      });
  }

  onToggleThemeClick(): void {
    this.toggleThemeClicked.emit();
  }

}
