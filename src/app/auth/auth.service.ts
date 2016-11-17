import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs/Rx";

import { User } from "./user.interface";

// TODO: Mongo querys
declare var firebase: any;

@Injectable()
export class AuthService {
    constructor(private router: Router) {
    }
    // TODO: signupUser
    signupUser(user: User) {
        // firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }
    // TODO: signinUser
    signinUser(user: User) {
        // firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
                console.log(error);
            });
    }
    // TODO: logout
    logout() {
        // firebase.auth().signOut();
        this.router.navigate(['/signin']);
    }
    // TODO: isAuthenticated
    isAuthenticated(): Observable<boolean> {
        const state = new Subject<boolean>();
        // firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                state.next(true);
            } else {
                state.next(false);
            }
        });
        return state.asObservable();
    }
}
