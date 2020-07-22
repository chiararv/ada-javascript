describe("Pokemon", () => {
  it("getMoves()toma como arg un pokemon y devuelve la lista de sus movimientos", () => {
    const pokemon = getSquirtle();
    const moves = [
      "Tackle", "Tail Whip", "Water Gun", "Hydro Pump"
    ];

    expect(getMoves(pokemon)).to.be.eql(moves);
  });

  it("getPrimaryAbility(pokemon) devuelve la habilidad primaria", () => {
    const pokemon = getSquirtle();
    const primaryAbility = 'Torrent';

    expect(getPrimaryAbility(pokemon)).to.be.eql(primaryAbility);
  });

  it("getWeaknesses(pokemon) devuelve la lista de tipos contra los que es débil", () => {
    const pokemon = getSquirtle();
    const weakness= ['electric', 'grass']

    expect(getWeaknesses(pokemon)).to.be.eql(weakness);
  });

  it("getResistances(pokemon) devuelve la lista de tipos a los que es resitente", () => {
    const pokemon = getSquirtle();
    const resistances= ['water', 'fire', 'ice', 'steel'];

    expect(getResistances(pokemon)).to.be.eql(resistances);
  });

  it("resistsType(pokemon, type) devuelve true si el pokémon es resistente a dicho tipo", () => {
    const pokemon = getSquirtle();
    const type= 'water';

    expect(resistsType(pokemon, type)).to.be.eql(true);
  });

  it("isWeakAgainst(attacker, attacked) devuelve `true` si el pokémon atacado es débil frente al tipo de pokémon que lo ataca", () => {
    const fight = {
      attacker: getPikachu(),
      attacked: getSquirtle(),
    }
    const {attacker , attacked} = fight;

    expect(isWeakAgainst(attacker, attacked)).to.be.eql(true);
  });

  it("isStrongAgainst(attacker, attacked) devuelve `true` si el pokémon atacado es resistente al tipo de pokémon que lo ataca", () => {
    const fight = {
      attacked: getPikachu(),
      attacker: getSquirtle(),
    }
    const {attacker , attacked} = fight;

    expect(isStrongAgainst(attacker, attacked)).to.be.eql(true);
  });

  it("addAbility(pokemon, newAbility) toma como argumentos un pokémon y un objeto con un tipo de habilidad y devuelve un nuevo pokémon agregando esa habilidad", () => {
    const pokemon = getSquirtle();
    const newAbility = { secondary: "Discharge" }

    const newPokemon = {
      name: 'Squirtle',
      type: 'water',
      ability: {
        primary: 'Torrent',
        secondary: "Discharge",
        hidden: 'Rain Dish'
      },
      stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
      },
      moves: ['Tackle', 'Tail Whip', 'Water Gun', 'Hydro Pump'],
      modifiers: {
        weakness: ['electric', 'grass'],
        resistances: ['water', 'fire', 'ice', 'steel']
      }
    }

    expect(addAbility(pokemon, newAbility)).to.be.eql(newPokemon);
  });

  it("removeMove(pokemon, removedElement) toma como argumentos un pokémon y un movimiento, elimina dicho movimiento de su lista y devuelve el pokémon con el movimiento eliminado.", () => {
    const pokemon = getSquirtle();
    const  removedElement= 'Water Gun'

    const newPokemon = {
      name: 'Squirtle',
      type: 'water',
      ability: {
        primary: 'Torrent',
        hidden: 'Rain Dish'
      },
      stats: {
        hp: 44,
        attack: 48,
        deffense: 50,
        speed: 43
      },
      moves: ['Tackle', 'Tail Whip', 'Hydro Pump'],
      modifiers: {
        weakness: ['electric', 'grass'],
        resistances: ['water', 'fire', 'ice', 'steel']
      }
    }

    expect(removeMove(pokemon, removedElement)).to.be.eql(newPokemon);
  });

  it("getAttackModifier(attacker, attacked) devuelve: 2 si el pokémon atacado es débil contra el tipo del pokémon que ataca, 0.5 si el pokémon atacado es resistente y 1 si no es débil ni resistente", () => {
    const fight = {
      attacker: getPikachu(),
      attacked: getSquirtle(),
    }
    const {attacker , attacked} = fight;

    expect(getAttackModifier(attacker, attacked)).to.be.eql(2);
  });

  it("getAttackLog(attacker, attacked) devuelve el historial del ataque realizado. Incluye el atacante, atacado, movimiento utilizado, HP perdidos y cuan efectivo resulta.", () => {
    
    const attacked = getTestPikachu();
    const attacker = getTestSquirtle();
    
    expect(getAttackLog(attacker, attacked)).to.be.eql("Squirtle used Tackle! Pikachu lost 14.4 HP!It's not very effective!");
  });

  it("calculateDamage() devuelve el daño ocasionado por un ataque", () => {

    const attacker = getTestPikachu();
    const attacked = getTestSquirtle();

    const fight = (attacker , attacked) => {

      return {  
        attack: attacker.stats.attack,
        defense: attacked.stats.deffense,
        modifier: getAttackModifier(attacker, attacked)
      }
      
    }

    expect(calculateDamage(fight, attacker, attacked)).to.be.eql(60.5);
  });

  it("battle(pokemonA, pokemonB) devuelve un objeto indicando quien gano, quien perdio, sus respectivos HP, las rondas jugadas y el historial de la batalla.", () => {
    const pokemonA = getTestPikachu();
    const pokemonB = getTestSquirtle();

    const result = {
      history: ["Pikachu used Quick Attack! Squirtle lost 60.5 HP!It's super effective!"],
      loser: "Squirtle has lost the game.",
      loserHP: "It has 0 remaining HP",
      rounds: 1,
      winner: "Pikachu won!",
      winnerHP: "It has 35 remaining HP",
    }
    expect(battle(pokemonA, pokemonB)).to.be.eql(result);

  });

});




