(function () {
  console.log('dragon controller')
  'use strict'

  angular
    .module('myApp')
    .controller('DragonsController', Controller)

  function Controller(DragonFactory, $location, $routeParams) {
    console.log("RP1:", $routeParams);

    if($routeParams.dragon_id) {
      DragonFactory.show($routeParams.dragon_id, function (data) {

        self.dragons = data
      })
    }

    const self =  this

    self.getDragons = function () {
      DragonFactory.index(function (data) {
        self.dragons = data
      })
    }

    self.createDragon = function () {
      DragonFactory.create(self.newDragon, function () {
        $location.url('/')
      })
    }
    self.editDragon = function () {
      console.log(self.dragons);
      DragonFactory.update(self.dragons, function () {
        $location.url('/dragons/show/' + self.dragon._id)
      })
    }
    self.deleteDragon = function (dragon_id) {
      console.log(dragon_id);
      DragonFactory.delete(dragon_id, function () {
        $location.url('/')
      })
    }
  }
})()
