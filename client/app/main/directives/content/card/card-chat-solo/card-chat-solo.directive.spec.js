'use strict';

describe('Directive: cardChatSolo', function () {

  // load the directive's module and view
  beforeEach(module('linkApp'));
  beforeEach(module('app/main/directives/content/card/card-chat-solo/card-chat-solo.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<card-chat-solo></card-chat-solo>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the cardChatSolo directive');
  }));
});