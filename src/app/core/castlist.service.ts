import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';
import { Store } from '@ngrx/store';
import { MAIN_ACTORS, PLAYER_CHARACTERS, NPCS } from '../home/cast.reducer';

@Injectable()
export class CastlistService {

  private charactersUrl = 'assets/mock-data/characters.json';
  castlist$: Observable<any>;

  constructor(private http: Http, private store: Store<string[]>) { }

  getCastlist(): Observable<any> {
    return this.castlist$ = this.http.get(this.charactersUrl)
      .map(response => response.json())
      .do(data => console.log('getCastlist CALLED:', data))
      .share()
      .catch(this.handleError);
  }

  loadMainActors() {
    return this.castlist$
      .map(data => data.mainActors)
      .map(payload => ({ type: MAIN_ACTORS, payload: payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  loadPlayerCharacters() {
    return this.castlist$
      .map(data => data.playerCharacters)
      .map(payload => ({ type: PLAYER_CHARACTERS, payload: payload }))
      .subscribe(action => this.store.dispatch(action));
  }

  loadNpcs() {
    return this.castlist$
      .map(data => data.npcs)
      .map(payload => ({ type: NPCS, payload: payload }))
      .subscribe(action => this.store.dispatch(action));
  }


  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `MY ERR MSG ${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
