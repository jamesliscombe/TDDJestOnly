import * as readline from 'node:readline';
import {Game} from '../game';

jest.mock('node:readline', () => ({
  createInterface: jest.fn(),
}));

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
  });

  it('should log the users name entered in the welcome prompt', () => {
    const mockQuestion = jest
      .fn()
      .mockImplementation((questionText, callback) => {
        callback('James Liscombe');
      });

    const mockClose = jest.fn();

    (readline.createInterface as jest.Mock).mockReturnValue({
      question: mockQuestion,
      close: mockClose,
    });

    const consoleSpy = jest.spyOn(console, 'log');

    const result = game.welcomeUser();

    expect(result).toBe('awaiting user input...');
    expect(mockQuestion).toHaveBeenCalledWith(
      'Please enter your name: ',
      expect.any(Function),
    );
    expect(consoleSpy).toHaveBeenCalledWith('Hello James Liscombe');
    expect(mockClose).toHaveBeenCalled();
  });

  it('should return the users name if it has already been entered', () => {
    game.setUserName('James Liscombe');

    const result = game.welcomeUser();

    expect(result).toBe('Hello James Liscombe, welcome back');
  });

  it('should return the users name', () => {
    game.setUserName('James Liscombe');

    expect(game.getUserName()).toBe('James Liscombe');
  });
});
