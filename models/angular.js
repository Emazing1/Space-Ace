/ node module exports the string 'animate-change' for convenience 
angular.module('myApp', [
  require('angular-animate-change')
]);
// otherwise, include the code first then the module name 
angular.module('myApp', [
  'angular-animate-change'
]);