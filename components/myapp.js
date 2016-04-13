(function () {
  'use strict';

  angular
    .module('nglite')
    .component('myApp', {
      controller: Controller,
      template: `Hello!`
    });

  function Controller() {}
})();
