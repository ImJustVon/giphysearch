angular.module('pokemonApp')
       .service('pokeapi', PokemonService);

function PokemonService($http) {
  var API = 'http://pokeapi.co/api/v2';
  this.getPokemon = function () {

    return $http.get(API + '/generation/1/')
        .then(function (response) {
          console.log('response: ', response);
          return response.data.pokemon_species;
        });
  };

  // this.getSelectedPokemonText = function (name) {
  //     return $http.get(API + '/pokemon-species/' + name)
  //                 .then(function (response) {
  //                   return response.data.flavor_text_entries;
  //                 });
  //   };

  this.getSelectedPokemon = function (name) {
    return $http.get(API + '/pokemon/' + name + '/')
                .then(function (response) {
                  return response.data;
                });
  };

  // this.getSearch = function (searchPhrase) {
  //
  //   return $http.get(API + '/search?q=' + encodeURI(searchPhrase.q.replace(' ', '+')) + '&' + key)
  //   .then(function (response) {
  //     return response.data.data;
  //   });
  // };

}
