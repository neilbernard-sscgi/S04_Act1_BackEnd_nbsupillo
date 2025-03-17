function createPokemon(
  name,
  type,
  hp,
  attack,
  defense,
  move1,
  move1d,
  move2,
  move2d,
  move3,
  move3d
) {
  return {
    name: name,
    type: type,
    hp: hp,
    attack: attack,
    defense: defense,
    move: [
      {
        name: move1,
        damage: move1d,
      },
      {
        name: move2,
        damage: move2d,
      },
      {
        name: move3,
        damage: move3d,
      },
    ],
  };
}

const pokemon1 = createPokemon(
  "Bulbasaur",
  "Water",
  1000,
  50,
  1000,
  "Hydro Pump",
  100,
  "Surf",
  200,
  "Aqua Tail",
  300
);
const pokemon2 = createPokemon(
  "Leafeon",
  "Water",
  1000,
  50,
  1000,
  "Hydro Pump",
  100,
  "Surf",
  200,
  "Aqua Tail",
  300
);
const pokemon3 = createPokemon(
  "Squirtle",
  "Fire",
  1000,
  50,
  1000,
  "Flamethrower",
  100,
  "Fire Blast",
  200,
  "Fire Ball",
  300
);
const pokemon4 = createPokemon(
  "Gyarados",
  "Fire",
  1000,
  50,
  1000,
  "Flamethrower",
  100,
  "Fire Blast",
  200,
  "Fire Ball",
  300
);
const pokemon5 = createPokemon(
  "Charizard",
  "Grass",
  1000,
  50,
  1000,
  "Leaf Blade",
  100,
  "Solar Beam",
  200,
  "Energy Ball",
  300
);
//console.log(pokemon1);
const pokemons = [pokemon1, pokemon2, pokemon3, pokemon4, pokemon5];

export default pokemons;
