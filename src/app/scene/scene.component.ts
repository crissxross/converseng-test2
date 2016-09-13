import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { ConvoService } from '../core/convo.service';
import { Convoturn } from '../core/convoturn.model';
import { AppState } from '../core/appstate';

@Component({
  // selector: 'app-scene', // unnecessary because via route
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
    private convoService: ConvoService,
    private store: Store<AppState>) { }

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

  getActors() {
    this.actors = this.store.select('convoRedu')
    // this.actors = this.store.select(state => state.convo['actor']);
  }

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
