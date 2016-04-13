(function () {
  'use strict';

  angular
    .module('nglite')
    .component('myApp', {
      controller: Controller,
      template: `Hello!
      <detail-app color="red" on-message="$ctrl.message()"></detail-app>
      <detail-app color="blue" on-message="$ctrl.message()"></detail-app>
      <detail-app2 color="red"></detail-app2>
      <detail-app2 color="blue"></detail-app2>
      `
    });

  function Controller() {
    this.message = function () {
      console.log('hoge');
    }
  }
})();
