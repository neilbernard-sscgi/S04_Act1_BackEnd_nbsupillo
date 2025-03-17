import pokemons from "./pokemons.js";

console.log("Welcome to pokemon arena");
const name = "John";
console.log("What your name?");
console.log(`Hello ${name}`);

const role = 1;
console.log(
  "what do you want to do\n1 - Join the battle\n2 - Watch\n3 - Custom battle"
);

console.log("Pick a tournament you want to participate:\n1 - 3");
console.log();
if (role == 1) {
  const arenaType = 6;
  console.log("Pick a Arena type:\n2'- 2player\n4 - 4player\n6 - 6player");
  if (arenaType == 6) {
    console.log("Pick a pokemon you want to use");
  }
}
/**
 * pick a tournament type
 * pick a pokemon
 * start
 */

const pokemonsPicked = pickPokemon(pokemons);
if (pokemonsPicked === false) {
  console.log("Cancelled the picking");
} else {
  console.log(fight(pokemonsPicked[0], pokemonsPicked[1]));
}

function pickPokemon(pokemons) {
  function printPokemons(arr) {
    let parag = "";
    for (let index = 0; index < arr.length; index++) {
      parag += `${index} for ${arr[index].name}, type ${arr[index].type}\n`;
    }
    return (parag += `c for cancel`);
  }

  function pick() {
    let isPick = false;
    let pokemon = [];
    while (isPick === false) {
      const fPokemonPick = prompt(printPokemons(pokemons));
      if (fPokemonPick === "c") {
        isPick = true;
      }
      const index = parseInt(fPokemonPick);
      if (index >= 0 && index <= pokemons.length) {
        isPick = true;
        pokemon = pokemons.splice(index, 1);
      } else {
        console.log("Invalid");
      }
    }
    //console.log(pokemon[0]);
    return pokemon[0] ? pokemon[0] : false;
  }

  const arr = [];
  arr[0] = pick();
  if (arr[0] === false) return false;
  arr[1] = pick();
  if (arr[1] === false) return false;

  return arr;
}
