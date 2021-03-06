import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

@Injectable()
export class ScenedataService {

  private scenedataUrl = 'assets/mock-data/';

  private testdataUrl = 'assets/mock-data/simple-convo.json';

  constructor(private http: Http) { }

  /** NOTE: http.get
   * returns an Observable emitting Response objects.
   * The result of map is also an Observable that emits a JSON object.
  */

  getSceneData(id: number | string): Observable<any> {
    return this.http.get(this.scenedataUrl+`scene-${id}.json`)
      .map(response => response.json())
      .catch(this.handleError);
  }


  // just for TESTING old way
  getTestData(): Observable<any> {
    return this.http.get(this.testdataUrl)
      .map(response => response.json())
      // .map(this.extractData) // <-alternative way
      .catch(this.handleError);
  }

  // private extractData(res: Response) {
  //   let body = res.json();
  //   console.log('extractData (body): ', body);
  //   return body || {};
  // }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
