import {NgModule} from '@angular/core'
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AppComponent} from './app.component';
import {Github} from './github/shared/github';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoBrowser} from './github/repo-browser/repo-browser';
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
  declarations: [
    AppComponent,
    AboutComponent,
    RepoBrowser,
    RepoList,
    RepoDetail,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [
    Github, { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
