import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { homeRouting } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    homeRouting
  ],
  declarations: [ HomeComponent ],
  providers: []
})
export class HomeModule { }
