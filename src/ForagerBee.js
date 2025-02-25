const Bee = require('./Bee');

class ForagerBee extends Bee {
  constructor () {
    super ();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
    console.log(`보물을 추가합니다: ${treasure}`);
  }
}



module.exports = ForagerBee;
