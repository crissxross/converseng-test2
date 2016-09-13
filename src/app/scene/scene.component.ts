import { Component, OnInit } from '@angular/core';
// Store is injected into our components to gain access to our application State and to dispatch actions
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ConvoService } from '../core/convo.service';
import { Convoturn } from '../core/convoturn.model';
import { AppState } from '../core/appstate';

@Component({
  styleUrls: ['scene.component.css'],
  template: `
    <app-npc [npcTurn]="npcTurns"></app-npc>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"
                [opOption]="opOption"
                [vkOption]="vkOption"
                [unOption]="unOption">
                </app-player>
    <footer>
      <p>sceneMeta: {{sceneMeta}} & ANY ACTORS? {{actors}}</p>
      <hr color="grey">
      <p>Test that the full <b>simple-convo.json</b> is loaded:</p>
      <pre>{{ convoTurns$ | async | json }}</pre>
    </footer>
  `
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  convoTurns$: Observable<Convoturn[]>;
  npcTurns;
  playerTurns;
  playerThought;
  playerOptions;
  opOption;
  vkOption;
  unOption;
  sceneMeta; // just testing for now
  actors;

  constructor(
    private store: Store<AppState>,
    private convoService: ConvoService
  ) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getMeta(); // just testing for now
    this.getActors();
    // this.getNpcTurns();
    // this.getPlayerTurns();
    // this.getPlayerThoughts();
    // this.getPlayerOptions();
  }

  getSceneConvo() { // get entire convo/dialogue for scene
    this.convoTurns$ = this.convoService.getSceneConvo();
  }

  // IMPORTANT !!!!!!
  // I might be getting confused because I'm overusing the term convo!
  // My convoReducer is not the same as the convo$ that is returned from
  // my ConvoService. The ConvoService returns POTENTIAL speech & thoughts.
  // My *convoReducer* handles the ACTUAL speech & thoughts delivered as
  // a result of dispatched ACTIONS.
// Therefore I should RENAME some of these things !!!!!!!!!

  getActors() {
    this.actors = this.store.select('convoReduc')
    // this.actors = this.store.select(state => state.convo['actor']);
  }

  // These functions NEED CHANGING (they are from before ngrx) !!!!!!!!!!!

// I may want to dispatch ACTIONS from this component or its child components - e.g. the selectOption button clicks

  getNpcTurns() {
    this.npcTurns = this.convoService.getNpcTurns();
  }

  getPlayerTurns() {
    this.playerTurns = this.convoService.getPlayerTurns();
  }

  getPlayerThoughts() {
    this.playerThought = this.convoService.getPlayerThoughts();
  }

  getPlayerOptions() {
    this.playerOptions = this.convoService.getPlayerOptions();
  }

  // just testing for now:
  getMeta() {
    this.sceneMeta = this.convoService.getTitle();
  }

}
