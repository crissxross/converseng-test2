/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ActorComponent } from './actor.component';

describe('Component: Actor', () => {
  it('should create an instance', () => {
    let component = new ActorComponent();
    expect(component).toBeTruthy();
  });
});
