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
	]

	function add(pokemon) {
		if (typeof pokemon === 'object') {
			if (Object.keys(pokemonList[0]).every((key) => key in item));
			pokemonList.push(pokemon);
		} else {
			alert('Pokemon is invalid!')
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

// for loop that iterates over pokemonList and writes names and heights
/*for (let i = 0; i < pokemonList.length; i++) {
	if (pokemonList[i].height > 15) {
		document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - Wow, that\'s a big Pokemon!')
	} else if (pokemonList[i].height <= 15 && pokemonList[i].height > 10) {
		document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - That\'s a normal size.')
	} else	if (pokemonList[i].height < 10) {
		document.write('<p>' + pokemonList[i].name + ' (Height: ' + pokemonList[i].height + ') - That\'s a tiny Pokemon!')
	}
}*/

// forEach loop that iterates over pokemonList and writes names and heights
pokemonRepository.getAll().forEach(function(pokemon) {
	document.write('<p>' + pokemon.name + ' is ' + pokemon.height + ' units tall, and is of the ' + pokemon.types[0] + ' type. ')
	document.write(pokemon.name + ' is also of the ' + pokemon.types[1] + ' type. ' + '</p>')
})