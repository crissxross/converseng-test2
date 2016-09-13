import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';

import { ScTestComponent } from './sc-test.component';
import { ActorComponent } from './actor.component';
import { PlayerComponent } from './player.component';
import { sctestRouting } from './sc-test.routing';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    sctestRouting
  ],
  declarations: [
    ScTestComponent,
    ActorComponent,
    PlayerComponent
  ],
  providers: []
})
export class ScTestModule { }
