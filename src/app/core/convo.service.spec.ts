/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ConvoService } from './convo.service';

describe('Service: Convo', () => {
  beforeEach(() => {
    addProviders([ConvoService]);
  });

  it('should ...',
    inject([ConvoService],
      (service: ConvoService) => {
        expect(service).toBeTruthy();
      }));
});
