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
			if (Object.keys(pokemonList[0]).every((key) => key in pokemon)); {
				pokemonList.push(pokemon);
			} else {
				alert('Pokemon is invalid!');
			}
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
	let list = document.querySelector('ul')
	let listItem = document.createElement('li');
	let button = document.createElement('button');
	button.innerText = pokemon.name
	button.classList.add('button')
	listItem.appendChild(button)
	list.appendChild(listItem)
})();