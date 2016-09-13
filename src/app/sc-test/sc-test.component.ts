import { Component, OnInit } from '@angular/core';
import { TestconvService } from '../core/testconv.service';
import { Observable } from 'rxjs/Observable';

@Component({
  template: `
    <app-actor [aTurn]="actorTurns"></app-actor>
    <app-player [pTurn]="playerTurns"
                [pThought]="playerThought"
                [pOptions]="playerOptions"
                [opOption]="opOption"
                [vkOption]="vkOption"
                [unOption]="unOption">
                </app-player>
    <footer>
      <p>testMeta: {{testMeta}} | TEST SCENE</p>
      <hr color="grey">
      {{ convoTurns$ | async | json }}
    </footer>
  `,
  styleUrls: ['sc-test.component.css']
})
export class ScTestComponent implements OnInit {
  errorMessage: string;
  convoTurns$: Observable<any>;
  actorTurns;
  playerTurns;
  playerThought;
  playerOptions;
  opOption;
  vkOption;
  unOption;
  testMeta; // just testing for now

  constructor(private convoService: TestconvService) { }

  ngOnInit() {
    this.getSceneConvo();
    this.getActorTurns();
    this.getPlayerTurns();
    this.getPlayerThoughts();
    this.getPlayerOptions();
    this.getTitle(); // just testing for now
  }

  getSceneConvo() {
    this.convoTurns$ = this.convoService.getSceneConvo();
  }

  getActorTurns() {
    this.actorTurns = this.convoService.getActorTurns();
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
  getTitle() {
    this.testMeta = this.convoService.getTitle();
  }

}
