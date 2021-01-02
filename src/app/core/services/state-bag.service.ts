import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateBagService {
  private isScreenSmallSubject = new BehaviorSubject<boolean>(false);
  public isScreenSmall$ = this.isScreenSmallSubject.asObservable();

  constructor() { }

  setScreenSmall(isScreenSmall: boolean): void {
    this.isScreenSmallSubject.next(isScreenSmall);
  }
}
