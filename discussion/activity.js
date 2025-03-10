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

function typeAdvantage(attackerType, defenderType) {
  if (attackerType === "Fire" && defenderType === "Grass") return 50;

  if (attackerType === "Water" && defenderType === "Fire") return 50;

  if (attackerType === "Grass" && defenderType === "Water") return 50;

  return 0;
}
function makePrompt(pokemon) {
  return `Choose attack: \n'm1' for ${pokemon.move[0].name} attack dealing ${pokemon.move[0].damage} damage \n'm2' ${pokemon.move[1].name} attack dealing ${pokemon.move[1].damage} damage \n'm3' for ${pokemon.move[2].name} attack dealing ${pokemon.move[2].damage} damage\n'n' for normal attack dealing 50 damage\n's' for surrendered`;
}

function fight(fPokemon, sPokemon) {
  let attackConvert = {
    m1: 0,
    m2: 1,
    m3: 2,
    n: "attack",
  };

  console.log(`${fPokemon.name} VS ${sPokemon.name}`);
  console.log("-------------Start-----------------");

  // function pokemonTrun() {}

  // let fPokemonTrun = pokemonTrun(fPokemon, sPokemon);
  // if (fPokemonTrun === "stop") break;

  // let sPokemonTrun = pokemonTrun(sPokemon, fPokemon);
  // if (sPokemonTrun === "stop") break;

  while (fPokemon.hp > 1 && sPokemon.hp > 1) {
    console.log("");
    console.log(`${fPokemon.name} turn!`);

    let fAttackType = prompt(makePrompt(fPokemon));
    // const number = parseInt(attack);
    // if (!isNaN(number) && number <= 4 && number >= 1) {
    //   console.log("number");
    // }
    if (
      fAttackType === "m1" ||
      fAttackType === "m2" ||
      fAttackType === "m3" ||
      fAttackType === "n"
    ) {
      console.log("");
      if (fAttackType === "n") {
        let p1Attack = fPokemon[attackConvert[fAttackType]];
        // console.log(`${sPokemon.hp} -
        //   (${p1Attack} + ${typeAdvantage(fPokemon.type, sPokemon.type)}`);
        sPokemon.hp =
          sPokemon.hp -
          (p1Attack + typeAdvantage(fPokemon.type, sPokemon.type));
        if (sPokemon.hp <= 0) {
          console.log(
            `${sPokemon.name} didn't survived the attack from ${fPokemon.name}`
          );
          console.log(`${fPokemon.name} win!!`);
          break;
        }
        console.log(
          `${sPokemon.name} survived the attack from ${fPokemon.name}`
        );
        console.log(`${sPokemon.name} current hp: ${sPokemon.hp}`);
      } else {
        let p1Attack = fPokemon.move[attackConvert[fAttackType]];

        sPokemon.hp =
          sPokemon.hp -
          (p1Attack.damage + typeAdvantage(fPokemon.type, sPokemon.type));
        if (sPokemon.hp <= 0) {
          console.log(
            `${sPokemon.name} didn't survived the attack from ${fPokemon.name}`
          );
          console.log(`${fPokemon.name} win!!`);
          break;
        }
        console.log(
          `${sPokemon.name} survived the attack from ${fPokemon.name}`
        );
        console.log(`${sPokemon.name} current hp: ${sPokemon.hp}`);
      }
    } else if (fAttackType === "s") {
      console.log("Cancelled tha battle");
      break;
    } else {
      console.log("Not valid attack");
      //continue;
    }
    //console.log(fPokemon);
    // --------------------second Pokemon turn-------------------------------------
    console.log("");
    console.log(`${sPokemon.name} turn!`);

    let sAttackType = prompt(makePrompt(sPokemon));
    // const number = parseInt(attack);
    // if (!isNaN(number) && number <= 4 && number >= 1) {
    //   console.log("number");
    // }
    if (
      sAttackType === "m1" ||
      sAttackType === "m2" ||
      sAttackType === "m3" ||
      sAttackType === "n"
    ) {
      console.log("");
      if (sAttackType === "n") {
        let p2Attack = sPokemon[attackConvert[sAttackType]];
        // console.log(`${fPokemon.hp} -
        //   (${p2Attack} + ${typeAdvantage(sPokemon.type, fPokemon.type)}`);
        fPokemon.hp =
          fPokemon.hp -
          (p2Attack + typeAdvantage(sPokemon.type, fPokemon.type));
        if (fPokemon.hp <= 0) {
          console.log(
            `${fPokemon.name} didn't survived the attack fromsPokemon.name}`
          );
          console.log(`${sPokemon.name} win!!`);
          break;
        }
        console.log(
          `${fPokemon.name} survived the attack from ${sPokemon.name}`
        );
        console.log(`${fPokemon.name} current hp: ${fPokemon.hp}`);
      } else {
        let p2Attack = sPokemon.move[attackConvert[sAttackType]];
        fPokemon.hp =
          fPokemon.hp -
          (p2Attack.damage + typeAdvantage(sPokemon.type, fPokemon.type));
        if (fPokemon.hp <= 0) {
          console.log(
            `${fPokemon.name} didn't survived the attack from ${sPokemon.name}`
          );
          console.log(`${sPokemon.name} win!!`);
          break;
        }
        console.log(
          `${fPokemon.name} survived the attack from ${sPokemon.name}`
        );
        console.log(`${fPokemon.name} current hp: ${fPokemon.hp}`);
      }
    } else if (sAttackType === "s") {
      console.log(`${sPokemon.name} Surrendered`);
      break;
    } else {
      console.log("Not valid attack");
      //continue;
    }
  }
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
    let pokemon = undefined;
    while (isPick === false) {
      let fPokemonPick = prompt(printPokemons(pokemons));
      if (fPokemonPick === "c") {
        isPick = true;
      }
      let index = parseInt(fPokemonPick);
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

  let arr = [];
  arr[0] = pick();
  if (arr[0] === undefined) return false;
  arr[1] = pick();
  if (arr[1] === undefined) return false;

  return arr;
}

let pokemonsPicked = pickPokemon(pokemons);
if (pokemonsPicked === false) {
  console.log("Cancelled the picking");
} else {
  console.log(fight(pokemonsPicked[0], pokemonsPicked[1]));
}
console.log("--------------------------");

//alert("neil");
