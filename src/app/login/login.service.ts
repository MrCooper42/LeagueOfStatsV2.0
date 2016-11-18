import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(public http: Http) { }

  login(data) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('/auth/login',JSON.stringify(data),{headers: headers})
      .map(res => res.json());
  }
}
