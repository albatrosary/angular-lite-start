(function () {
  'use strict';

  angular
    .module('nglite')
    .component('detailApp2', {
      controller: Controller,
      template: `<div ng-click="$ctrl.message()">detail Hello! {{$ctrl.color}}
        <input type="text" ng-show="$ctrl.flag">
      </div>`,
      bindings: {
        color: '@'
      }
    });

  // var ctrl;
    
  function Controller() {
    var ctrl = this;
    ctrl.flag = true;
  }
  
  Controller.prototype.message = function () {
    var ctrl = this;
    console.log(ctrl.color);
    ctrl.flag = !ctrl.flag;
  }
})();
