
const getMoves = (pokemon) =>{
  const { moves: movimientos } = pokemon;
  return movimientos;
}

const getPrimaryAbility = (pokemon) =>{
  const {ability: {primary}} = pokemon
  return primary;
}

const getWeaknesses = (pokemon) => {
  const {modifiers: {weakness}} = pokemon;
 return weakness;
}

const getResistances = (pokemon) => {
  const {modifiers: {resistances}} = pokemon;
  return resistances;
}

const resistsType = (pokemon, type) => {
  const {modifiers: {resistances}} = pokemon; 
  return resistances.includes(type);
}

const isWeakAgainst = (attacker, attacked) => {
  const {type} = attacker;
  return getWeaknesses(attacked).includes(type);
}

const isStrongAgainst = (attacker, attacked) => {
  const {type} = attacker;
  return getResistances(attacked).includes(type);
}

const addAbility = (pokemon, newAbility) => {
  const newPokemon = {...pokemon};
  newPokemon.ability = {...newPokemon.ability, ...newAbility}
  return newPokemon;
}

const addMove = (pokemon, newMove) => {
  const newPokemon = {...pokemon}
  const {moves} = newPokemon;
  moves.push(newMove)
  return newPokemon
}

const removeMove = (pokemon, removedElement) => {
  const newPokemon = {...pokemon}
  const {moves} = newPokemon;

  const elementIndex =  moves.indexOf(removedElement);

  moves.splice(elementIndex, 1)
  
  return newPokemon
}

const getAttackModifier = (attacker , attacked) =>{
  let result = 0;

  if(isWeakAgainst(attacker , attacked)){
    result = 2;
  }
  else if(isStrongAgainst(attacker, attacked)){
    result = 0.5;
  }else{
    result = 1
  };
  return result;

}

const squirtle = {
  name: "Squirtle",
  type: "water",
  ability: {
      "primary": "Torrent",
      "hidden": "Rain Dish"
  },
  stats: {
      hp: 100,
      attack: 48,
      deffense: 50,
      speed: 43
  },
  moves: [
      "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
  ],
  modifiers: {
      "weakness": ["electric", "grass"],
      "resistances": ["water", "fire", "ice", "steel"]
  }
}

const pikachu = {
  name: "Pikachu",
  type: "electric",
  ability: {
      "primary": "Static",
      "hidden": "Lightning rod"
  },
  stats: {
      hp: 100,
      attack: 55,
      deffense: 40,
      speed: 90
  },
  moves: [
      "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
  ],
  modifiers: {
      "weakness": ["ground"],
      "resistances": ["electric", "flying", "water", "steel"]
  }
}

//daño de pikachu 60,5
// daño de squirtle es 14.4

const fight = (atacante , defensor) => {

return {  
  attack: atacante.stats.attack,
  defense: defensor.stats.deffense,
  modifier: getAttackModifier(atacante, defensor)
}

}

const calculateDamage = (fight, atacante, defensor) => {
  const { attack, defense, modifier } = fight(atacante, defensor)
  return Number((0.5 * attack * (attack / defense) * modifier).toFixed(1));

}

const remaingHP = (atacante, defensor) =>{
  // newPokemon = {...defensor}
  const hp = defensor.stats.hp - calculateDamage(fight, atacante, defensor)
  defensor.stats.hp = hp
  return defensor.stats.hp
};


const randomMove = (pokemon) => {

  const {moves} = pokemon;

  const max = (moves.length)

  const randomNumber =  Math.floor(Math.random() * (max)) ;

  return moves[randomNumber];
}

const getAttackLog = (atacante, defensor) => {
  const {name: attacker} = atacante;
  const {name: attacked} = defensor;
  let move = randomMove(atacante);
  let damage = calculateDamage(fight, atacante, defensor);

  let effectiveness = ""
  if(getAttackModifier(atacante, defensor) === 0.5){
    effectiveness = "It's not very effective!";
  }else if(getAttackModifier(atacante, defensor) === 2){
    effectiveness = "It's super effective!";
  }

  return  `${attacker} used ${move}! ${attacked} lost ${damage} HP!${effectiveness}`
  
};

const battle = (pokemonA, pokemonB) =>{

  let rondas = 1;
  const [ fastestPokemon, slowestPokemon ] = [{...pokemonA}, {...pokemonB}].sort((a,b) => a.stats.speed > b.stats.speed)
  let hpFastest = fastestPokemon.stats.hp;
  let hpSlowest = slowestPokemon.stats.hp;
  
  let history = []
  while(hpFastest > 0 && hpSlowest > 0){
    
    hpSlowest = remaingHP(fastestPokemon, slowestPokemon);
    history.push(getAttackLog(fastestPokemon, slowestPokemon))
    if (hpSlowest <= 0) {
      hpSlowest = 0;
      break
    };
    hpFastest = remaingHP(slowestPokemon, fastestPokemon);
    history.push(getAttackLog(slowestPokemon, fastestPokemon))
    if (hpFastest <= 0) {
      hpFastest = 0;
      break
    };

    rondas++  
  }
  


  let [winner, loser] = hpFastest > 0 ? [fastestPokemon.name, slowestPokemon.name] : [ slowestPokemon.name, fastestPokemon.name];

  let points = winner === fastestPokemon.name ? { winnerHP: hpFastest, loserHP: hpSlowest} : { winnerHP: hpSlowest, loserHP: hpFastest };

  const result = {
    winner: `${winner} won!`, 
    winnerHP: `It has ${points.winnerHP} remaining HP`,
    loser: `${loser} lost the game.`,
    loserHP:`It has ${points.loserHP} remaining HP`,
    rounds: rondas,
    history: history,
  }
  return result
}
