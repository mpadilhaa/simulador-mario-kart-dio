import { Race } from "./corrida.js";
import { Player } from "./player.js";

const mario = new Player("Mario", 3, 4, 3, 0);
const peach = new Player("Peach", 4, 3, 2, 0);
const yoshi = new Player("Yoshi", 4, 2, 3, 0);
const luigi = new Player("Luigi", 4, 3, 4, 0);
const donkeyKong = new Player("Donkey Kong", 2, 2, 5, 0);
const bowser = new Player("Bowser", 2, 5, 5, 0);

class Main {
  static async main() {
    console.log(
      `🏁🚨 Corrida entre ${mario.name} e ${luigi.name} começando... \n`
    );
    const race = new Race();
    const raceEngine = await race.playerRaceEngine(mario, peach);
    return raceEngine;
  }
}

Main.main();
