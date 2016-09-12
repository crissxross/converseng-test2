import { Routes, RouterModule } from '@angular/router';

import { RepoBrowser } from './repo-browser/repo-browser';
import { RepoList } from './repo-list/repo-list';
import { RepoDetail } from './repo-detail/repo-detail';

const githubRoutes: Routes = [
  {
    path: 'github', component: RepoBrowser,
    children: [
      { path: '', component: RepoList },
      {
        path: ':org', component: RepoList,
        children: [
          { path: '', component: RepoDetail },
          { path: ':repo', component: RepoDetail }
        ]
      }]
  }
];

export const githubRouting = RouterModule.forChild(githubRoutes);
