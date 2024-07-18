import * as userInput from '../utils/userinput';
import {Game} from '../game';

jest.mock('../utils/userinput');

describe('Game', () => {
  let originalPrompt: typeof global.prompt;
  let game: Game;

  afterAll(() => {
    global.prompt = originalPrompt;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeAll(() => {
    originalPrompt = global.prompt;
  });

  beforeEach(() => {
    game = Game.getInstance();
    game.setUserName(null);
  });

  it('should log the users name entered in the welcome prompt', async () => {
    const mockUserInput = jest.fn().mockResolvedValue('James Liscombe');
    (userInput.userInput as jest.Mock) = mockUserInput;

    const result = await game.welcomeUser();

    expect(result).toBe('Hello James Liscombe');
    expect(mockUserInput).toHaveBeenCalledWith('Please enter your name: ');
    expect(game.getUserName()).toBe('James Liscombe');
  });

  it('should return the users name if it has already been entered', async () => {
    game.setUserName('James Liscombe');

    const result = await game.welcomeUser();

    expect(result).toBe('Hello James Liscombe, welcome back');
  });

  it('should return the users name', () => {
    game.setUserName('James Liscombe');

    expect(game.getUserName()).toBe('James Liscombe');
  });
});
