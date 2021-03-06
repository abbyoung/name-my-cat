var App = angular.module('App', []);

App.controller('NameCtrl', function($scope, $http) {
  $scope.names;
  $scope.firstName;
  $scope.lastName;
  $scope.catPhoto;


  $http.get('static/json/names.json')
       .then(function(res){
          $scope.names = res.data;   
          $scope.getName($scope.names);
        });


  $scope.getName = function(data){
    let firstNames = data.names.firstName;
    let lastNames = data.names.lastName;

    $scope.firstName = firstNames[Math.floor(Math.random()*firstNames.length)];
    $scope.lastName = lastNames[Math.floor(Math.random()*lastNames.length)];
    getCatPhoto();
  };


  function getCatPhoto(){
    var catPhotos = [
      'static/img/cat-face-1.png',
      'static/img/cat-face-2.png',
      'static/img/cat-face-3.png',
      'static/img/cat-face-4.png',
      'static/img/cat-face-5.png',
      'static/img/cat-face-6.png',
      'static/img/cat-face-7.png',
      'static/img/cat-face-8.png',
      'static/img/cat-face-9.png',
      'static/img/cat-face-10.png',
      'static/img/cat-face-11.png',
      'static/img/cat-face-12.png',
      'static/img/cat-face-13.png',
      'static/img/cat-face-14.png',
      'static/img/cat-face-15.png',
      'static/img/cat-face-16.png',
    ]
  
    $scope.catPhoto = catPhotos[Math.floor(Math.random()*catPhotos.length)];
  };

});