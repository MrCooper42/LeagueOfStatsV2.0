import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class SignupService {
  constructor(public http: Http) { }

  signup(data) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('/auth/signup',JSON.stringify(data),{headers: headers})
      .map(res => res.json());
  }
}
