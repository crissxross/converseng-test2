import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './counter.reducer';
/**
 * NGRX
 * Inject the Store service into your components and services.
 * The store.select method is used to obtain the appropriate
 * slice(s) of state from your application store - see:
 * StoreModule.provideStore(reducers, initialState) in app.module
 */

interface AboutState {
  counter: number;
}

@Component({
  // selector: 'about', // unnecessary because via router
  template: `
    <h3>About Component</h3>
    <small>This component is currently only being used for testing ngrx/store and the counterReducer demo.</small>
    <hr color="grey">
    <p>Current Count: {{ counter | async }}</p>
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <button (click)="reset()">Reset</button>
  `
})
export class AboutComponent {
  counter: Observable<number>;

  constructor(public store: Store<AboutState>) {
    this.counter = store.select('counterReducer');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT });
  }

  reset() {
    this.store.dispatch({ type: RESET });
  }
}
