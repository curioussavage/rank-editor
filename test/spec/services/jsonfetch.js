'use strict';

describe('Service: Jsonfetch', function () {

  // load the service's module
  beforeEach(module('rankEditorApp'));

  // instantiate service
  var Jsonfetch;
  beforeEach(inject(function (_Jsonfetch_) {
    Jsonfetch = _Jsonfetch_;
  }));

  it('should do something', function () {
    expect(!!Jsonfetch).toBe(true);
  });

});
