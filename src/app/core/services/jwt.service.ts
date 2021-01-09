import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  getConduitToken(): String {
    return window.localStorage['jwtConduitToken'];
  }

  saveConduitToken(token: String) {
    window.localStorage['jwtConduitToken'] = token;
  }

  destroyConduitToken() {
    window.localStorage.removeItem('jwtConduitToken');
  }
}
