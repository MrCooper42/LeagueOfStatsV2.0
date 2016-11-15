import {
  it,
  describe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Matches} from './';


describe('Matches Service', () => {

  beforeEachProviders(() => [Matches]);


  it('should ...', inject([Matches], (service: Matches) => {

  }));

});
