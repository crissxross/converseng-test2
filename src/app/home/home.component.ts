import {Component} from '@angular/core';

@Component({
  // selector: 'home', // unnecessary because via router
  styles: [`
    h3, h4 {
      margin-bottom: 10px;
      color: #988;
    }
  `],
  template: `
    <h1>{{title}}</h1>
    <h3>Conversation Engine</h3>
    <p>Welcome to the home component!</p>
  `
})
export class HomeComponent {
  title = 'converseng-test2'
}
