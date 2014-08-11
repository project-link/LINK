'use strict';

describe('Factory: AuthinterceptorFtry', function () {

  // load the service's module
  beforeEach(module('linkApp'));

  // instantiate service
  var AuthinterceptorFtry;
  beforeEach(inject(function (_AuthinterceptorFtry_) {
    AuthinterceptorFtry = _AuthinterceptorFtry_;
  }));

  it('should do something', function () {
    expect(!!AuthinterceptorFtry).toBe(true);
  });

});
