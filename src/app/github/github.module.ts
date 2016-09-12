import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RepoBrowser} from './repo-browser/repo-browser';
import {RepoList} from './repo-list/repo-list';
import { RepoDetail } from './repo-detail/repo-detail';
import { githubRouting } from './github.routing';

@NgModule({
  imports: [
    CommonModule,
    githubRouting
  ],
  declarations: [
    RepoBrowser,
    RepoList,
    RepoDetail
  ]
})
export class GithubModule { }
