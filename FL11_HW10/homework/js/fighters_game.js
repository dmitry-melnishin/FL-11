function Fighter(param) {
  let currentHP = param.hp;
  this.getName = () => param.name;
  this.getDamage = () => param.damage;
  this.getAgility = () => param.agility;
  this.getHealth = () => currentHP;

  let wins = 0;
  let losses = 0;
  let initialFighterHP = param.hp;

  const getProbability = () => {
    const min = - 0.5;
    const max = 100;
    const probability = Math.round(min + Math.random() * (max - min + 1));

    return probability;
  }

  this.attack = (defender) => {
    const maxAgility = 100;

    const probability = getProbability();
    const agil = defender.getAgility();

    if (probability <= maxAgility - agil) {
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`);
    } else {
      console.log(`${this.getName()} attack missed`);
    }
  }

  this.logCombatHistory = () => console.log(`Name ${this.getName()}, Wins: ${wins}, Losses: ${losses}`);

  this.heal = (healthPoints) => {
    if (currentHP < initialFighterHP) {
      if (currentHP + healthPoints >= initialFighterHP) {
        currentHP = initialFighterHP;
        console.log(`${this.getName()} restored 100% points of his health`);
      } else {
        currentHP += healthPoints;
        console.log(`${this.getName()} restored ${healthPoints} points of his health`);
      }
    } else {
      currentHP;
    }
  };

  this.dealDamage = (dmg) => {
    if (currentHP - dmg < 0) {
      currentHP = 0;
    } else {
      currentHP -= dmg;
    }
  }

  this.addWin = () => {
    wins += 1;
  }
  this.addLoss = () => {
    losses += 1;
  }

}

const myFighter = new Fighter({name: 'John', damage: 50, hp: 150, agility: 25});
const myFighter2 = new Fighter({name: 'Liukang', damage: 30, hp: 100, agility: 30});

const getDeadMessage = name => console.log(`${name} is dead and can't fight.`);
const isDead = fighter => fighter.getHealth() === 0;

const notifyAboutDeath = (fighter1, fighter2) => {
  const deadFighterName = isDead(fighter1) ? fighter1.getName() : fighter2.getName();
  getDeadMessage(deadFighterName);
}

const isSomeoneAlreadyDead = (fighter1, fighter2) => {
  let isSomeoneDead = false;

  if (isDead(fighter1) || isDead(fighter2)) {
    notifyAboutDeath(fighter1, fighter2);
    isSomeoneDead = true;
  }

  return isSomeoneDead;
}

const updateStatistics = (fighter1, fighter2) => {
  if (!isDead(fighter1)) {
    fighter1.addWin();
    fighter2.addLoss();
  } else {
    fighter2.addWin();
    fighter1.addLoss();
  }
}

const battle = (fighter1, fighter2) => {
  const isSomeoneDead = isSomeoneAlreadyDead(fighter1, fighter2);

  if (isSomeoneDead) {
    return;
  }

  while (!isDead(fighter1) && !isDead(fighter2)) {
    fighter1.attack(fighter2);

    if (isDead(fighter2)) {
      break;
    } else {
      fighter2.attack(fighter1);
    }
  }

  updateStatistics(fighter1, fighter2);
}
