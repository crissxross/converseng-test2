import { Routes, RouterModule } from '@angular/router';
// should this use ModuleWithProviders? see docs

import { ScTestComponent } from './sc-test.component';

const sctestRoutes: Routes = [
  { path: 'sctest', component: ScTestComponent }
];

export const sctestRouting = RouterModule.forChild(sctestRoutes);
