/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { PlayerComponent } from './player.component';

describe('Component: Player', () => {
  it('should create an instance', () => {
    let component = new PlayerComponent();
    expect(component).toBeTruthy();
  });
});
