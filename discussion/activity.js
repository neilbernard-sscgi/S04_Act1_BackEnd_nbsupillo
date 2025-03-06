function createPokemon(
  name,
  type,
  hp,
  attack,
  defense,
  move1,
  move1d,
  move2,
  move2d
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
    ],
  };
}

const pokemon1 = createPokemon(
  "Bulbasaur",
  "Water",
  1000,
  200,
  1000,
  "Hydro Pump",
  200,
  "Surf",
  200
);
const pokemon2 = createPokemon(
  "Leafeon",
  "Water",
  1000,
  200,
  1000,
  "Hydro Pump",
  200,
  "Surf",
  200
);
const pokemon3 = createPokemon(
  "Squirtle",
  "Fire",
  1000,
  200,
  1000,
  "Flamethrower",
  200,
  "Fire Blast",
  200
);
const pokemon4 = createPokemon(
  "Gyarados",
  "Fire",
  1000,
  200,
  1000,
  "Flamethrower",
  200,
  "Fire Blast",
  200
);
const pokemon5 = createPokemon(
  "Charizard",
  "Grass",
  1000,
  200,
  1000,
  "Leaf Blade",
  200,
  "Solar Beam",
  200
);
console.log(pokemon5);
