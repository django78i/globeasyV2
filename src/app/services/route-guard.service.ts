import { tap } from 'rxjs/operators';
import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class RouteGuardService {

	constructor(
		private router: Router,
		private auth: AngularFireAuth,
		public navCtrl: NavController
	) { }

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		console.log('ici');
		// isLoggedIn method is a getter returning a boolean
		return new Promise((resolve, reject) => {
			this.auth.authState.pipe(
				tap(user => {
					console.log(user);
					if (user) {
						resolve(true);
					} else {
						console.log('User is not logged in');
						this.router.navigate(['home-log']);
						resolve(false);
					}
				})
			).subscribe()
		});
	}

}
