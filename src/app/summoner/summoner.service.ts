import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

// `Injectable` is usually used with `Dart` metadata
// generation; it has no special meaning within `TypeScript`
// This makes sure `TypeScript` emits the needed metadata
// Reference : http://blog.thoughtram.io/angular/2015/09/17/resolve-service-dependencies-in-angular-2.html
@Injectable()
export class SummonerService {
  // The `public` keyword denotes that the constructor parameter will
  // be retained as a field.
  // Reference: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#336-members
  // Add `Http` type annotation to the `http` function argument
  // Type annotations in TypeScript are used to record the
  // intended contract of the function or variable.
  // Reference: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#3-types
  // Here we intend the constructor function to be called with the
  // `Http` parameter
  constructor(public http:Http) {

  }

  getAll() {
      return this.http.get('/api/summoner')
          // map the `HTTP` response from `raw` to `JSON` format
          // using `RxJs`
          // Reference: https://github.com/Reactive-Extensions/RxJS
          .map(res => res.json());
  }

  createSummoner(data) {

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/summoner', JSON.stringify(data),
          {headers: headers})
        .map(res => res.json());
  }

  deleteSummoner(id) {

      return this.http.delete(`/api/summoner/${id}`)
          .map(res => res.json());
  }

  updateMatchList(id) {
    let headers = new Headers();
    return this.http.put('/api/summoner/${id}', id,
          {headers: headers})
        .map(res => res.json());
  }
}
// just make the api call here dummy, do we really have to store the matchlist in the db....!
