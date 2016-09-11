import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable
import '../rxjs-operators';

import { ScenedataService } from './scenedata.service';
import { Convoturn } from './convoturn.model';

@Injectable()
export class ConvoService {
  title = 'conversengine';
  convo$: Observable<any>;
  // convo$: Observable<Convoturn[]>;
  interval$ = Observable.interval(2000);
  timer$ = Observable.timer(100, 2000);

  constructor(private scenedata: ScenedataService) { }

  getSceneConvo() {
    return this.convo$ = this.scenedata.getSceneData()
      .map(data => data.convo)
      .do(data => console.log('CALLED getSceneConvo:', data))
      .share();
  }

  /** NOTE:
   * use another filter to get the appropriate
   * says or thinks according to the index of option clicked
   * OR should it be according to the op/vk/un type of option clicked?
   */

  /** convo state stream:
   * npc-says, p-think, p-options, user-clicks/chooses,
   * p-says, npc-reacts, npc-says
   * should i use rx repeat operator?
   */

  /**
   * Or do I need an observable (or two) of who
   * is speaking and who is listening?
   * ngrx Actions could emit who is speaking and listening
  */


  getActorTurns() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'npc')
      .map(turn => turn['says'][0][1])
      // .map(turn => turn['says'][0]['op'])
      // .do(x => console.log('getActorTurns:', x))
      .zip(this.timer$, (says, delay, period) => says);
      // .zip(this.interval$, (says, period) => says);
  }

  getPlayerTurns() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['says'][0][1])
      // .do(x => console.log('getPlayerTurns:', x))
      .zip(this.interval$, (says, period) => says)
      .delay(2000);
  }

  getPlayerThoughts() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['thinks'][0][1])
      // .do(x => console.log('getPlayerThoughts:', x))
      .zip(this.interval$, (thinks, period) => thinks)
      .delay(500);
  }

  getPlayerOptions() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'])
      // .do(x => console.log('getPlayerOptions:', x))
      .zip(this.interval$, (options, period) => options)
      .delay(1000);
  }

  // For TESTING with simple-convo2.json:
  getOpOption() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'][0]['op'])
      .do(x => console.log('getOpOption:', x))
      .zip(this.interval$, (option, period) => option)
      .delay(1000);
  }

  getVkOption() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'][1]['vk'])
      .do(x => console.log('getVkOption:', x))
      .zip(this.interval$, (option, period) => option)
      .delay(1000);
  }

  getUnOption() {
    return this.convo$.mergeMap(convo => convo)
      .filter(turn => turn['actor'] === 'player')
      .map(turn => turn['options'][2]['un'])
      .do(x => console.log('getUnOption:', x))
      .zip(this.interval$, (option, period) => option)
      .delay(1000);
  }


  getTitle() {
    return this.title;
  }

}

