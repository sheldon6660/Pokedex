let pokemonRepository = (function () {
	let pokemonList = [
		{
			name: 'Bulbasaur',
			height: 7,
			types: ['grass', 'poison']
		},
		{
			name: 'Lucario',
			height: 12,
			types: ['steel', 'fighting']
		},
		{
			name: 'Charizard',
			height: 17,
			types: ['fire', 'flying']
		},
		{
			name: 'Dragonite',
			height: 22,
			types: ['dragon', 'flying']
		},
	];

	function add(pokemon) {
		if (typeof pokemon === 'object') {
			if (Object.keys(pokemonList[0]).every((key) => key in pokemon));
			pokemonList.push(pokemon);
		} else {
			alert('Pokemon is invalid!');
		}
	}

	function getAll() {
		return pokemonList;
	}

	return {
		add: add,
		getAll: getAll,
	};
})();

// forEach loop that iterates over pokemonList and writes names and heights
pokemonRepository.getAll().forEach(function(pokemon) {
	document.write('<p>' + pokemon.name + ' is ' + pokemon.height + ' units tall, and is of the ' + pokemon.types[0] + ' type. ')
	document.write(pokemon.name + ' is also of the ' + pokemon.types[1] + ' type. ' + '</p>')
})