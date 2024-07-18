import * as readline from 'node:readline';
import {stdin as input, stdout as output} from 'process';

class Game {
  private static instance: Game;
  private userName: string | null = '';

  private constructor() {}

  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  public welcomeUser(): string {
    if (this.userName) {
      return `Hello ${this.userName}, welcome back`;
    }

    const rl = readline.createInterface({input, output});

    rl.question('Please enter your name: ', answer => {
      this.userName = answer;
      console.log(`Hello ${this.userName}`);
      rl.close();
    });

    return 'awaiting user input...';
  }

  public getUserName(): string | null {
    return this.userName;
  }

  public setUserName(name: string): void {
    this.userName = name;
  }
}

export {Game};
