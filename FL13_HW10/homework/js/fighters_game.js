function Fighter(obj) {
  let win = 0;
  let loss = 0;
  let hp = obj.hp;
  const name = obj.name;
  const totalHp = obj.hp;
  const damage = obj.damage;
  const agility = obj.agility;
  const strength = obj.strength;
  const maxPercent = 100;

  return {
    getName: () => name,
    getDamage: () => damage,
    getStrength: () => strength,
    getAgility: () => agility,
    getHealth: () => hp,
    logCombatHistory: () => `Name: ${name}, Wins: ${win}, Losses: ${loss}`,

    attack: function (defender) {
      let randomNumber = Math.floor(Math.random() * (maxPercent + 1));
      let successProbability =
        maxPercent - defender.getStrength() - defender.getAgility();

      if (randomNumber <= successProbability) {
        defender.dealDamage(damage);
        console.log(`${name} makes ${damage} to ${defender.getName()}`);
      } else {
        console.log(`${name} attack missed`);
      }
    },

    heal: function (healthAmount) {
      hp += healthAmount;
      if (hp > totalHp) {
        hp = totalHp;
      }
    },

    dealDamage: function (damage) {
      hp -= damage;
      if (hp < 0) {
        hp = 0;
      }
    },

    addWin: function () {
      win += 1;
    },

    addLoss: function () {
      loss += 1;
    }
  };
}

function battle(fighter1, fighter2) {
  while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    if (fighter2.getHealth() > 0) {
      fighter2.attack(fighter1);
    }
  }

  if (fighter1.getHealth() > 0) {
    console.log(`${fighter1.getName()} has won!`);
    fighter1.addWin();
    fighter2.addLoss();
  } else {
    console.log(`${fighter2.getName()} has won!`);
    fighter2.addWin();
    fighter1.addLoss();
  }
}

const myFighter = new Fighter({
  name: 'Maximus',
  damage: 20,
  hp: 100,
  strength: 20,
  agility: 15
});

const myFighter2 = new Fighter({
  name: 'Commodus',
  damage: 25,
  strength: 25,
  agility: 20,
  hp: 90
});

battle(myFighter, myFighter2);
