import { NgModule, Optional, SkipSelf} from '@angular/core';

import { ScenedataService } from './scenedata.service';
import { ConvoService } from './convo.service';
import { CastlistService } from './castlist.service';

// CoreModule is a pure services module
// as recommended in docs - https://angular.io/docs/ts/latest/cookbook/ngmodule-faq.html#!#q-module-recommendations

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ScenedataService,
    ConvoService,
    CastlistService
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

}
