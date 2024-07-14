import {welcomeUser} from '../game';

describe('Game', () => {
  it('should log the users name entered in the welcome prompt', () => {
    const mockPrompt = jest.fn().mockReturnValue('James Liscombe');

    (global as unknown as {prompt: () => string}).prompt = mockPrompt;

    const result = welcomeUser();

    expect(result).toBe('Hello James Liscombe');

    mockPrompt.mockRestore();
  });
});
