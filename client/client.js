var app = angular.module('myApp', []);

app.controller('MainController', ['$http', function($http){
  var main = this;
  main.heroes = [];

  main.powerOptions = ['Invisibility', 'Flight', 'Super Speed', 'Heat Vision', 'Super Strength', 'Accelerated Healing', 'Power Blast', 'Animal Affinity'];

  var getHeroes = function(){
    $http.get('/hero').then(function(res){
      if(res.status !== 200) {
        throw new Error('Failed to find heroes');
      }
      main.heroes = res.data;
      main.hero = {};
    });
  }

  main.addHero = function(hero){
    $http.post('/hero', hero).then(getHeroes);
  }

  main.deleteHero = function(hero, index){
    var id = hero._id;
    $http.delete('/hero/' + id).then(getHeroes);
  }

  getHeroes();
}]);
