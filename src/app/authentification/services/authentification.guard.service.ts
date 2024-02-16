import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuardService implements CanActivate {

  constructor(private authService : AuthentificationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    return this.authService.user.pipe(take(1), map(user => {
      const isAuth = !!user;
      if(isAuth)
      {
        if(user.roles.includes(route.data['role'])) return true;
        else if (user.roles.includes('Admin'))
        {
          return this.router.createUrlTree(['admin/dashboard']);
        }else if(user.roles.includes('Technicien'))
        {
          return this.router.createUrlTree(['admin/patients']);
        }else if(user.roles.includes('Responsable'))
        {
          return this.router.createUrlTree(['admin/dashboard'])
        }

        // return true;
      }

      return this.router.createUrlTree(['auth']);
    }));
  }
}
