angular.module('pokemonApp')
       .controller('MainController', MainController);

function MainController(pokeapi) {
  var main = this;
  console.log('Maincontroller loaded');

  main.pokemonSelected = {};
  main.pokemonArray = [];
  main.flavorText = '';
  pokeapi.getPokemon().then(function (poke) {
    main.pokemonArray = poke;
    main.pokemonArray.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    console.log('Poke: ', poke);
  });

  main.getSelectedPokemon = function () {
    pokeapi.getSelectedPokemon(main.selected)
           .then(function (pokemon) {
            console.log('main.selected: ', main.selected);
            main.pokemonSelected = pokemon;
            console.log('main.pokemonSelected: ', pokemon);
          });

    // pokeapi.getSelectedPokemonText(main.selected)
    //        .then(function (flavorText) {
    //         main.flavorText = flavorText;
    //         console.log('flavorText: ', flavorText);
    //       });
  };


  // main.getSearch = function () {
  //   gifapi.getSearch(main.searchPhrase).then(function (list) {
  //     main.gifsArray = list;
  //   });
  //
  // };

};
