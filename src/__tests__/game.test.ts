import {Game} from '../game';

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
    const mockPrompt = jest.fn().mockReturnValue('James Liscombe');

    (global as unknown as {prompt: () => string}).prompt = mockPrompt;

    const result = game.welcomeUser();

    expect(result).toBe('Hello James Liscombe');

    mockPrompt.mockRestore();
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
