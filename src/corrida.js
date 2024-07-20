export class Race {
  constructor(character1, character2) {
    this.character1 = character1;
    this.character2 = character2;
  }

  async rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  async playerRaceEngine(character1, character2) {
    for (let round = 1; round <= 5; round++) {
      console.log(`🏁 Rodada ${round}`);
    }

    let block = await this.getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResult1 = await this.rollDice();
    let diceResult2 = await this.rollDice();

    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "reta") {
      totalTestSkill1 = diceResult1 + character1.velocidade;
      totalTestSkill1 = diceResult2 + character1.velocidade;
    }
    if (block === "curva") {
      totalTestSkill1 = diceResult1 + character1.manobrabilidade;
      totalTestSkill1 = diceResult2 + character1.manobrabilidade;
    } else {
    }
  }

  async getRandomBlock() {
    let random = Math.random();
    let result;

    switch (true) {
      case random < 0.33:
        result = "reta";
        break;
      case random < 0.66:
        result = "curva";
        break;

      default:
        result = "confronto";
        break;
    }

    return result;
  }
}
