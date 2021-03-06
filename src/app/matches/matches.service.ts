import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class MatchesService {

  constructor(public http:Http) { }


  getAll() {
    return this.http.get('/api/matches')
      .map(res => res.json());
  }
  createMatch(data) {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/matches', JSON.stringify(data), { headers: headers }).map(res => res.json());
  }
  deleteMatch(id) {
    return this.http.delete(`/api/matches/${id}`)
        .map(res => res.json());
  }
}
