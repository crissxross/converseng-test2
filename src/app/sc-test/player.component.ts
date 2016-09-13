import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  template: `
    <div class="player-wrapper">
      <p class="player-speaks">
        {{ pTurn | async }}
      </p>
      <div class="thinks">
        <p>{{ pThought | async }}</p>
        <div class="options">
          <ul>
            <li *ngFor="let option of pOptions | async">
              <button (click)="selectOption(option)">
              {{ option[1] }}</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() pTurn;
  @Input() pThought: string;
  @Input() pOptions;
  @Input() opOption;
  @Input() vkOption;
  @Input() unOption;
  // selectedOption;
  @Output() selectedOption: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectOption(option) {
    this.selectedOption = option;
    console.log('clicked Option:', option[0], '- saying:', option[1]);
    // console.log('clicked target:', event.target);
  }

}
