import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  template: `
    <div class="npc-wrapper">
      <p class="npc-speaks">
      {{ aTurn | async }}
      </p>
    </div>
  `,
  styleUrls: ['npc.component.css']
})
export class NpcComponent implements OnInit {
  @Input() aTurn;

  constructor() { }

  ngOnInit() {
  }

}
