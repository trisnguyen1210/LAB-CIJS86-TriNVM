// 10. Callback
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
Pokemon.forEach(element => {
    console.log(`Hello ${element}`);
});

newArrayPokemon = Pokemon.map((pokemon, index) => {
    newIndex = (index + 1).toString().padStart(2, 0);
    return `${newIndex}_${pokemon}`;
})
console.log(newArrayPokemon);