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

    this.userName = prompt('Please enter your name');

    return `Hello ${this.userName}`;
  }

  public getUserName(): string | null {
    return this.userName;
  }

  public setUserName(name: string): void {
    this.userName = name;
  }
}

export {Game};
