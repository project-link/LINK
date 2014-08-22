'use strict';

describe('Service: lnNoty', function () {

  // load the service's module
  beforeEach(module('linkApp'));

  // instantiate service
  var lnNoty;
  beforeEach(inject(function (_lnNoty_) {
    lnNoty = _lnNoty_;
  }));

  it('should do something', function () {
    expect(!!lnNoty).toBe(true);
  });

});
