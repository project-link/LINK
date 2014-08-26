'use strict';

describe('Directive: landingFooter', function () {

  // load the directive's module and view
  beforeEach(module('linkApp'));
  beforeEach(module('app/landing/directives/landing-footer/landing-footer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<landing-footer></landing-footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the landingFooter directive');
  }));
});