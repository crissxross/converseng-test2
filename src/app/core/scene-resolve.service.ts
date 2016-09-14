import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ScenedataService } from './scenedata.service';
// import '../rxjs-operators';

@Injectable()
export class SceneResolver implements Resolve<any> {

  constructor(private scdata: ScenedataService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | Promise<any> | any {
    let id = +route.params['id'];

    return this.scdata.getSceneData(id)
      .map(data => data.scene)
      .do(data => console.log('RESOLVED scene data:', data));
      // .share();
  }
}
