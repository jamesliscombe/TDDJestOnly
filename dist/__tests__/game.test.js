"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("../game");
describe('Game', () => {
    it('should log the users name entered in the welcome prompt', () => {
        const mockPrompt = jest.fn().mockReturnValue('James Liscombe');
        global.prompt = mockPrompt;
        const result = (0, game_1.welcomeUser)();
        expect(result).toBe('Hello James Liscombe');
        mockPrompt.mockRestore();
    });
});
