import {userInput} from '../utils/userinput';
import * as readline from 'node:readline';

jest.mock('node:readline', () => ({
  createInterface: jest.fn().mockReturnValue({
    question: jest.fn(),
    close: jest.fn(),
  }),
}));

describe('utils', () => {
  describe('userInput', () => {
    it('should return the user input', async () => {
      const mockQuestion = jest
        .fn()
        .mockImplementation((question, callback) => {
          callback('James Liscombe');
        });

      (readline.createInterface as jest.Mock).mockReturnValue({
        question: mockQuestion,
        close: jest.fn(),
      });

      const result = await userInput('Please enter your name: ');

      expect(result).toBe('James Liscombe');
      expect(mockQuestion).toHaveBeenCalledWith(
        'Please enter your name: ',
        expect.any(Function),
      );
    });
  });
});
