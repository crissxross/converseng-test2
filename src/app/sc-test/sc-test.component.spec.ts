/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ScTestComponent } from './sc-test.component';

describe('Component: Scene', () => {
  it('should create an instance', () => {
    let component = new ScTestComponent();
    expect(component).toBeTruthy();
  });
});
