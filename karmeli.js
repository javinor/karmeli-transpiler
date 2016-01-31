;(function () {
  angular
    .module('KarmeliApp', [])
    .controller('KarmeliController', KarmeliController)

  function KarmeliController($scope) {
    $scope.text = 'Š'
  }
}());
