'use strict';

describe('Service: Rankexport', function () {

  // load the service's module
  beforeEach(module('rankEditorApp'));

  // instantiate service
  var Rankexport;
  beforeEach(inject(function (_Rankexport_) {
    Rankexport = _Rankexport_;
  }));

  it('should do something', function () {
    expect(!!Rankexport).toBe(true);
  });

});
