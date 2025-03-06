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
  200,
  1000,
  "Flamethrower",
  200,
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

function typeAdvantage(attackerType, defenderType) {
  if (attackerType === "Fire" && defenderType === "Grass") return 50;

  if (attackerType === "Water" && defenderType === "Fire") return 50;

  if (attackerType === "Grass" && defenderType === "Water") return 50;

  return 0;
}
function fight(fPokemon, sPokemon) {
  let s = 10;

  let attackConvert = {
    m1: 0,
    m2: 1,
    m3: 2,
    n: "attack",
  };
  console.log(`${fPokemon.name} VS ${sPokemon.name}`);
  console.log("-------------Start-----------------");
  while (fPokemon.hp > 1 && sPokemon.hp > 1) {
    console.log("");
    console.log(`${fPokemon.name} turn!`);

    let fAttackType = prompt(
      `Choose attack: \n'm1' for ${fPokemon.move[0].name} attack dealing ${fPokemon.move[0].damage} damage \n'm2' ${fPokemon.move[1].name} attack dealing ${fPokemon.move[1].damage} damage \n'm3' for ${fPokemon.move[2].name} attack dealing ${fPokemon.move[2].damage} damage\n'n' for normal attack dealing 50 damage\n'c' for cancel`
    );
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
    } else if (fAttackType === "c") {
      console.log("Cancelled tha battle");
      break;
    } else {
      console.log("Not valid attack");
      continue;
    }
    if (fAttackType === "n") {
      let p1Attack = fPokemon[attackConvert[fAttackType]];
      sPokemon.hp =
        sPokemon.hp - (p1Attack + typeAdvantage(fPokemon.type, sPokemon.type));
      if (sPokemon.hp <= 0) {
        console.log(
          `${sPokemon.name} didn't survived the attack from ${fPokemon.name}`
        );
        console.log(`${fPokemon.name} win!!`);
        break;
      }
      console.log(`${sPokemon.name} survived the attack from ${fPokemon.name}`);
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
      console.log(`${sPokemon.name} survived the attack from ${fPokemon.name}`);
      console.log(`${sPokemon.name} current hp: ${sPokemon.hp}`);
    }
    // --------------------sPokemon turn-------------------------------------
    console.log("");
    console.log(`${sPokemon.name} turn!`);
    let sAttackType = prompt(
      `Choose attack: \n'm1' for ${sPokemon.move[0].name} attack dealing ${sPokemon.move[0].damage} damage \n'm2' ${sPokemon.move[1].name} attack dealing ${sPokemon.move[1].damage} damage \n'm3' for ${sPokemon.move[2].name} attack dealing ${sPokemon.move[2].damage} damage\n'n' for normal attack dealing 50 damage\n'c' for cancel`
    );
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
    } else if (sAttackType === "c") {
      console.log("Cancelled tha battle");
      break;
    } else {
      console.log("Not valid attack");
      continue;
    }
    if (sAttackType === "n") {
      let p1Attack = sPokemon[attackConvert[sAttackType]];
      fPokemon.hp =
        fPokemon.hp - (p1Attack + typeAdvantage(sPokemon.type, fPokemon.type));
      if (fPokemon.hp <= 0) {
        console.log(
          `${fPokemon.name} didn't survived the attack fromsPokemon.name}`
        );
        console.log(`${sPokemon.name} win!!`);
        break;
      }
      console.log(`${fPokemon.name} survived the attack from ${sPokemon.name}`);
      console.log(`${fPokemon.name} current hp: ${fPokemon.hp}`);
    } else {
      let p1Attack = sPokemon.move[attackConvert[sAttackType]];
      fPokemon.hp =
        fPokemon.hp -
        (p1Attack.damage + typeAdvantage(sPokemon.type, fPokemon.type));
      if (fPokemon.hp <= 0) {
        console.log(
          `${fPokemon.name} didn't survived the attack from ${sPokemon.name}`
        );
        console.log(`${sPokemon.name} win!!`);
        break;
      }
      console.log(`${fPokemon.name} survived the attack from ${sPokemon.name}`);
      console.log(`${fPokemon.name} current hp: ${fPokemon.hp}`);
    }
  }
}
fight(pokemon1, pokemon2);
//alert("neil");
