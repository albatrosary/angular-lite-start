(function () {
  'use strict';

  angular
    .module('nglite')
    .component('detailApp', {
      controller: Controller,
      template: `<div ng-click="$ctrl.onMessage()">detail Hello! {{$ctrl.color}}</div>`,
      bindings: {
        color: '@',
        onMessage: '&'
      }
    });

  function Controller() {}
})();
