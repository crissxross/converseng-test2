/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ScenedataService } from './scenedata.service';

describe('Service: Scenedata', () => {
  beforeEach(() => {
    addProviders([ScenedataService]);
  });

  it('should ...',
    inject([ScenedataService],
      (service: ScenedataService) => {
        expect(service).toBeTruthy();
      }));
});
