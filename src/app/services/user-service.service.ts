import { NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class UserServiceService {

	user: Observable<any>;
	userSubject: BehaviorSubject<any>;

	constructor(
		private afs: AngularFirestore,
		public auth: AngularFireAuth,
		public navCtl: NavController
	) { }

	logUserWithGoogle() {
		this.userSubject = new BehaviorSubject(null);
		let goog = from(this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()));
		let userGoogle;
		this.user = goog.pipe(
			tap(r => userGoogle = r.user),
			switchMap(r => this.afs.collection('users').doc(r.user.uid).valueChanges()),
			tap(r => {
				if (r) {
					this.userSubject.next(r);
				} else {
					const newUser = {
						name: userGoogle.displayName,
						mail: userGoogle.email,
						uid: userGoogle.uid
					}
					this.afs.collection('users').doc(userGoogle.uid).set(Object.assign({}, newUser));
					this.userSubject.next(newUser);
				}
				this.navCtl.navigateForward(['']);
			})
		)
		this.user.subscribe();

	}


}
