import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor',
  template: `
    <div class="actor-wrapper">
      <p class="actor-speaks">
      {{ aTurn | async }}
      </p>
    </div>
  `,
  styleUrls: ['actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input() aTurn;

  constructor() { }

  ngOnInit() {
  }

}
