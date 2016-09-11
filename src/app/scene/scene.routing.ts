import { Routes, RouterModule } from '@angular/router';
// should this use ModuleWithProviders? see docs

import { SceneComponent } from './scene.component';

const sceneRoutes: Routes = [
  { path: 'scene', component: SceneComponent }
];

export const sceneRouting = RouterModule.forChild(sceneRoutes);
