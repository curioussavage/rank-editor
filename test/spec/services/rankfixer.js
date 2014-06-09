'use strict';

describe('Service: Rankfixer', function () {

  // load the service's module
  beforeEach(module('rankEditorApp'));

  // instantiate service
  var Rankfixer;
  beforeEach(inject(function (_Rankfixer_) {
    Rankfixer = _Rankfixer_;
  }));

  it('should do something', function () {
    expect(!!Rankfixer).toBe(true);
  });

});
