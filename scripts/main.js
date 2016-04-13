/**
 * This is AngularEggs module.
 *
 * @module AngularEggs
 */
(function () {
  'use strict';

  angular
    .module('nglite', [
    ])
    .controller('AppController', AppController);

  AppController.$inject = [];

  /**
   * AppController
   *
   * @class AppController
   * @main AngularEggs
   * @constructor
   */
  function AppController () {
    this.name = 'Angular1.5';
  }
})();
