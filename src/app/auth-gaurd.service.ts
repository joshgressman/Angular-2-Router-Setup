import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
//this is an auth gaurd service

@Injectable() //allows you to access other services
export class AuthGaurd implements CanActivate, CanActivateChild {
 constructor(private authService: AuthService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenicated()
    .then(
      (authenicated: boolean) => {
        if(authenicated){
          return true;
        } else {
          this.router.navigate(['/']);
        }
      }
    );
  }

  canActivateChild(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.canActivate(route, state);
  }
}
