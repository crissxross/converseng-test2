import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { Store, StoreModule } from '@ngrx/store';

import {AppComponent} from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SceneModule } from './scene/scene.module';
import { ScTestModule } from './sc-test/sc-test.module';
import { AboutModule } from './about/about.module';
import { GithubModule } from './github/github.module';
import { GithubService } from './github/shared/github.service';

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
    CoreModule,
    HomeModule,
    SceneModule,
    ScTestModule,
    AboutModule,
    GithubModule
    // add StoreModule.provideStore( ... )
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    appRoutingProviders,
    GithubService, { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
