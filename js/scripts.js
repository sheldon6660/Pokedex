let pokemonList = [
	{name: 'Bulbasaur', height: 7, types: ['grass', 'poison']},
	{name: 'Lucario', height: 12, types: ['steel', 'fighting']},
	{name: 'Charizard', height: 17, types: ['fire', 'flying']},
	{name: 'Dragonite', height: 22, types: ['dragon', 'flying']},
];

for (let i = 0; i < pokemonList.length; i++) {
	document.write(pokemonList[i].name + " (Height: " + pokemonList[i].height + ") ")
}