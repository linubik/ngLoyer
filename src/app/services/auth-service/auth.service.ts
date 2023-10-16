import { HelperService } from '../helpers/helper.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay } from 'rxjs/operators';
import { User } from '../../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    public router: Router,
    public helperService: HelperService
  ) {}

  param_url: string = 'auth';
  user: any = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user') || '')
    : [];
  roles: any[] = localStorage.getItem('user')
    ? this.user.existedUser.userRoles
    : [];
  structuredRoles: any[] = [];

  logIn(data: any) {
    return this.http
      .post(
        `${
          environment.API_URL_TEST + environment.API_VERSION + this.param_url
        }`,
        data
      )
      .pipe(shareReplay());
  }

  isLoggedIn(): boolean {
    let authPass = localStorage.getItem('user');
    return authPass !== null ? true : false;
  }

  logOut() {
    if (localStorage.removeItem('user') == null) {
      this.router.navigate(['/login']).then(() => {
        this.helperService.refrechPage();
      });
    }
  }

  setUserIntoLocalStorage(userData: User) {
    // Remove old storage
    localStorage.removeItem('user');

    // Add the new one
    localStorage.setItem(
      'user',
      JSON.stringify({ isLogged: true, existedUser: userData })
    );
  }

  checkUserRole(role: string) {
    let hasAccess: boolean;

    if (this.user) {
      if (this.roles) {
        this.roles.forEach((role) => {
          if (!role.deleted) {
            this.structuredRoles.push(role.roleCode);
          }
        });
        hasAccess = this.structuredRoles.includes(role);
        if (hasAccess) {
          return true;
        }
      }
    }
    return false;
  }

  updateUserPassword(id: string, data: any): Observable<any> {
    return this.http.put(
      environment.API_URL_TEST +
        environment.API_VERSION +
        this.param_url +
        '/update-password/' +
        id,
      data
    );
  }
}
