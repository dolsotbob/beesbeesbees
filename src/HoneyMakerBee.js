const Bee = require('./Bee');

class HoneyMakerBee extends Bee {
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey';
    this.honeyPot = 0;
  }

  makeHoney() {
    return this.honeyPot++;
  }

  giveHoney() {
    if (this.honeyPot === 0) {
      return;
    }
    
    return this.honeyPot--;
  }
}

module.exports = HoneyMakerBee;
