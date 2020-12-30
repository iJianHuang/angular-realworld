import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Contactuser } from '../models/Contactuser';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactuserService {
  private _users: BehaviorSubject<Contactuser[]>;
  private dataStore: {
    users: Contactuser[]
  }

  constructor(private http: HttpClient) { 
    console.log('serving contact user service .... ');
    this.dataStore = {
      users: []
    };
    this._users = new BehaviorSubject<Contactuser[]>([]);
  }

  get users(): Observable<Contactuser[]> {
    return this._users.asObservable();
  }

  addUser(user: Contactuser): Promise<Contactuser> {
    return new Promise((resolve, reject) => {
      user.id = this.dataStore.users.length + 1;
      this.dataStore.users.push(user);
      this._users.next((Object.assign({}, this.dataStore)).users);
      resolve(user);
    });
  }

  userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
  }

  loadAll() {
    const usersUrl = 'https://angular-material-api.azurewebsites.net/users'
    this.http.get<Contactuser[]>(usersUrl)
    .subscribe(data => {
      this.dataStore.users = data;
      this._users.next((Object.assign({}, this.dataStore)).users);
    }, error => {
      console.log("Failed to fetch users");
    });
  }
}
