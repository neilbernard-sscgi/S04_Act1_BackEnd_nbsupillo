import pokemons from "./pokemons.js";
//defese, heal, critical hit, turns

function typeAdvantage(p1, p2) {
  if (p1 === "Fire" && p2 === "Grass") return 50;

  if (p1 === "Water" && p2 === "Fire") return 50;

  if (p1 === "Grass" && p2 === "Water") return 50;

  return 0;
}
function makePrompt(pokemon) {
  return `Choose attack: \n'm1' for ${pokemon.move[0].name} attack dealing ${pokemon.move[0].damage} damage \n'm2' ${pokemon.move[1].name} attack dealing ${pokemon.move[1].damage} damage \n'm3' for ${pokemon.move[2].name} attack dealing ${pokemon.move[2].damage} damage\n'n' for normal attack dealing 50 damage\n's' for surrendered`;
}

function fight(fPokemon, sPokemon) {
  const attackConvert = {
    m1: 0,
    m2: 1,
    m3: 2,
    n: "attack",
  };

  console.log(`${fPokemon.name} VS ${sPokemon.name}`);
  console.log("-------------Start-----------------");

  let round = 0;
  const attackPlusP1 = typeAdvantage(fPokemon.type, sPokemon.type);
  console.log("1", attackPlusP1);
  const attackPlusP2 = typeAdvantage(sPokemon.type, fPokemon.type);
  console.log("1", attackPlusP2);

  //return false;
  while (fPokemon.hp > 1 && sPokemon.hp > 1) {
    function pokemonTrun(fPokemon, sPokemon, attackPlus) {
      console.log("");
      console.log(`${fPokemon.name} turn!`);

      //console.log(fPokemon.defense);
      const fAttackType = prompt(makePrompt(fPokemon));
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
          const p1Attack = fPokemon[attackConvert[fAttackType]];
          console.log(p1Attack + attackPlus);
          const res = battleResult(fPokemon, sPokemon, p1Attack + attackPlus);
          if (res === "stop") return "stop";
        } else {
          const p1Attack = fPokemon.move[attackConvert[fAttackType]];
          console.log(p1Attack.damage, attackPlus);
          const res = battleResult(
            fPokemon,
            sPokemon,
            p1Attack.damage + attackPlus
          );
          if (res === "stop") return "stop";
        }
      } else if (fAttackType === "s") {
        console.log(`${fPokemon.name} surrender the battle`);
        return "stop";
      } else {
        console.log("Not valid attack");
        //continue;
      }
    }
    function battleResult(fPokemon, sPokemon, attackDamage) {
      // console.log(`${sPokemon.hp} -
      //   (${p1Attack} + ${typeAdvantage(fPokemon.type, sPokemon.type)}`);
      const totalAttack = attackDamage;

      if (sPokemon.defense > 0) {
        sPokemon.defense -= totalAttack;
        if (sPokemon.defense < 0) {
          sPokemon.hp = sPokemon.defense + sPokemon.hp;
          sPokemon.defense = 0;
        }
      } else {
        sPokemon.hp -= totalAttack;
      }

      if (sPokemon.hp <= 0) {
        console.log(
          `${sPokemon.name} didn't survived the attack from ${fPokemon.name}`
        );
        console.log(`${fPokemon.name} win!!`);
        return "stop";
      }
      console.log(`${sPokemon.name} survived the attack from ${fPokemon.name}`);
      console.log(`${sPokemon.name} current defense: ${sPokemon.defense}`);
      console.log(`${sPokemon.name} current hp: ${sPokemon.hp}`);

      return "continue";
    }

    console.log(`-------------Round ${++round}-----------------`);
    console.log("");

    const fPokemonTrun = pokemonTrun(fPokemon, sPokemon, attackPlusP1);
    if (fPokemonTrun === "stop") break;

    const sPokemonTrun = pokemonTrun(sPokemon, fPokemon, attackPlusP2);
    if (sPokemonTrun === "stop") break;
  }
  return "Game Ended";
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

const pokemonsPicked = pickPokemon(pokemons);
if (pokemonsPicked === false) {
  console.log("Cancelled the picking");
} else {
  console.log(fight(pokemonsPicked[0], pokemonsPicked[1]));
}
console.log("--------------------------");

//alert("neil");
//critical hit
//limited uses of moves
//heal
//shield
//attack first
