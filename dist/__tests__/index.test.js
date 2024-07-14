"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe('Integration Tests', () => {
    it('should add two numbers correctly', () => {
        const result = (0, index_1.addNumbers)(1, 2);
        expect(result).toBe(3);
    });
    it('should subtract two numbers correctly', () => {
        const result = (0, index_1.subtractNumbers)(2, 1);
        expect(result).toBe(1);
    });
    it('should multiply two numbers correctly', () => {
        const result = (0, index_1.multiplyNumbers)(2, 3);
        expect(result).toBe(6);
    });
    it('should divide two numbers correctly', () => {
        const result = (0, index_1.divideNumbers)(6, 3);
        expect(result).toBe(2);
    });
    it('should find the square root of a number correctly', () => {
        const result = (0, index_1.findSquareRoot)(100);
        expect(result).toBe(10);
    });
});
