import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-npc',
  styleUrls: ['npc.component.css'],
  template: `
    <div class="npc-wrapper">
      <p class="npc-speaks">
      {{ npcTurn | async }}
      </p>
    </div>
  `
})
export class NpcComponent implements OnInit {
  @Input() npcTurn;

  constructor() { }

  ngOnInit() {
  }

}
