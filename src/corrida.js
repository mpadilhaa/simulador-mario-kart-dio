export class Race {
  constructor(character1, character2) {
    this.character1 = character1;
    this.character2 = character2;
  }

  async rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  async playerRaceEngine(character1, character2) {
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    for (let round = 1; round <= 5; round++) {
      let block = await this.getRandomBlock();
      let diceResult1 = await this.rollDice();
      let diceResult2 = await this.rollDice();
      console.log(`🏁 Rodada ${round}`);
      if (block === "reta") {
        totalTestSkill1 = diceResult1 + character1.velocidade;
        totalTestSkill2 = diceResult2 + character1.velocidade;

        await this.logRollResult(
          character1.name,
          block,
          diceResult1,
          character1.velocidade
        );
        await this.logRollResult(
          character2.name,
          block,
          diceResult2,
          character2.velocidade
        );
      } else if (block === "curva") {
        totalTestSkill1 = diceResult1 + character1.manobrabilidade;
        totalTestSkill2 = diceResult2 + character1.manobrabilidade;

        await this.logRollResult(
          character1.name,
          block,
          diceResult1,
          character1.manobrabilidade
        );
        await this.logRollResult(
          character2.name,
          block,
          diceResult2,
          character2.manobrabilidade
        );
      } else {
        let powerResult1 = diceResult1 + character1.poder;
        let powerResult2 = diceResult1 + character1.poder;
      }

      console.log(`Bloco: ${block}`);

      if (totalTestSkill1 == totalTestSkill2) {
        console.log("empate");
        character1.pontos++;
      } else if (totalTestSkill2 > totalTestSkill1) {
        console.log(`${character2.name} marcou um ponto`);
        character2.pontos++;
      } else if (totalTestSkill1 > totalTestSkill2) {
        console.log(`${character1.name} marcou um ponto`);
      }
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

  async logRollResult(characterName, block, diceResult, attribute) {
    return console.log(
      `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
        diceResult + attribute
      }`
    );
  }
}
