import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SharedModule } from '../shared/shared.module';

import { SceneComponent } from './scene.component';
import { ActorComponent } from './actor.component';
import { PlayerComponent } from './player.component';
import { sceneRouting } from './scene.routing';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    sceneRouting
  ],
  declarations: [
    SceneComponent,
    ActorComponent,
    PlayerComponent
  ],
  providers: []
})
export class SceneModule { }
