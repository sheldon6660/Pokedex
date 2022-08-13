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
	    if (
	    	typeof pokemon === "object" &&
	    	"name" in pokemon &&
	    	"height" in pokemon &&
	    	"types" in pokemon
	    ) {
	    	repository.push(pokemon);
	    } else {
	    	console.log("pokemon is not correct");
	    }
	}

	function getAll() {
		return pokemonList;
	}

	function addListItem(pokemon) {
		let list = document.querySelector('.list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerText = pokemon.name;
		button.classList.add('button');
		listItem.appendChild(button);
		list.appendChild(listItem);
	}

	return {
		add: add,
		getAll: getAll,
		addListItem: addListItem
	};
})();


// forEach loop that iterates over pokemonList and writes names and heights
pokemonRepository.getAll().forEach(function(pokemon) {
	pokemonRepository.addListItem(pokemon);
});

