import {userInput} from './utils/userinput';
class Game {
  private static instance: Game;
  private userName: string | null = null;

  private constructor() {}

  public static getInstance(): Game {
    if (!Game.instance) {
      Game.instance = new Game();
    }
    return Game.instance;
  }

  public async welcomeUser() {
    if (this.userName) {
      return `Hello ${this.userName}, welcome back`;
    }

    this.userName = await userInput('Please enter your name: ');

    return `Hello ${this.userName}`;
  }

  public getUserName(): string | null {
    return this.userName;
  }

  public setUserName(name: string | null): void {
    this.userName = name;
  }
}

export {Game};
