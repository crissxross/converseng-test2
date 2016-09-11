// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/combineLatest'; // in use?

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime'; // in use?
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/distinctUntilChanged'; // in use?
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/switchMap'; // in use?
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/zip';
