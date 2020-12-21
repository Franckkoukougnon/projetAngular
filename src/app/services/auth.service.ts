import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(
        () => {
          this.isAuth = true;
          resolve(true);
        }, 4000
      )

    })
  }

  signOut() {
    this.isAuth = false;
  }

  constructor() { }
}
