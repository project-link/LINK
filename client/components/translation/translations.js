angular.module('linkApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('ko_KR', {"Hello!":"안녕!"});
/* jshint +W100 */
}]);