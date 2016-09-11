import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { routing, appRoutingProviders } from './app.routing';
import { Store, StoreModule } from '@ngrx/store';

// import {RouterModule} from '@angular/router';
// import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import { HomeModule } from './home/home.module';
import { SceneModule } from './scene/scene.module';
import { AboutModule } from './about/about.module';

import { Github } from './github/shared/github';
import { RepoBrowser } from './github/repo-browser/repo-browser';
import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

/**
 * NGRX
 * In app's main module, import your reducers and use the
 * StoreModule.provideStore(reducers, initialState)
 * function to provide them to Angular's injector.
 */

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    // RouterModule.forRoot(rootRouterConfig)
    CoreModule,
    HomeModule,
    SceneModule,
    AboutModule,
    // add StoreModule.provideStore( ... )
  ],
  declarations: [
    AppComponent,
    RepoBrowser,
    RepoList,
    RepoDetail,
  ],
  providers: [
    appRoutingProviders,
    Github, { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
