import { Routes, RouterModule } from '@angular/router';
// should this use ModuleWithProviders? see docs
import { SceneResolver } from '../core/scene-resolve.service';

import { SceneComponent } from './scene.component';

const sceneRoutes: Routes = [
  {
    path: 'scene/:id',
    component: SceneComponent,
    resolve: { scene: SceneResolver }
  }
];

export const sceneRouting = RouterModule.forChild(sceneRoutes);
