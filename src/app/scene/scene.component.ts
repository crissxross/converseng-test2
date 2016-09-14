import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Store is injected into our components to gain access to our application State and to dispatch actions
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ConvoService } from '../core/convo.service'; // is this needed now?
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
      <p>Scene id: {{ (scdata | async).scene.meta.id }} -
Actors: {{ (scdata | async).scene.meta.actors }}
      </p>
      <p>[0] ACTOR: {{ (scdata | async).scene.convo[0].actor }}
      SAYS: {{ (scdata | async).scene.convo[0].says[0][1] }}</p>
      <hr color="grey">
      <p>Test that the full scene data is loaded:</p>
      <pre>{{ scdata | async | json }}</pre>
    </footer>
  `
})
export class SceneComponent implements OnInit {
  errorMessage: string;
  convoTurns$: Observable<Convoturn[]>;
  scdata;
  npcTurns;
  playerTurns;
  playerThought;
  playerOptions;
  opOption;
  vkOption;
  unOption;
  actors;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>,
    private convoService: ConvoService
  ) { }

  ngOnInit() {
    this.scdata = this.route.data;
    // this.getSceneConvo();
    this.getActors();
    // this.getNpcTurns();
    // this.getPlayerTurns();
    // this.getPlayerThoughts();
    // this.getPlayerOptions();
  }

  // IMPORTANT !!!!!!
  // I might be getting confused because I'm overusing the term convo!
  // My convoReducer is not the same as the convo$ that is returned from
  // my ConvoService. The ConvoService returns POTENTIAL speech & thoughts.
  // My *convoReducer* handles the ACTUAL speech & thoughts delivered as
  // a result of dispatched ACTIONS.
// Therefore I should RENAME some of these things !!!!!!!!!

  getSceneConvo() { // get entire convo/dialogue for scene
    this.convoTurns$ = this.convoService.getSceneConvo();
  }

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

}
