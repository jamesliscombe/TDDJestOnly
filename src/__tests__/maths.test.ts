import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers, findSquareRoot } from '../maths';

describe('Integration Tests', () => {
  it('should add two numbers correctly', () => {
    const result = addNumbers(1, 2);
    expect(result).toBe(3);
  });

  it('should subtract two numbers correctly', () => {
    const result = subtractNumbers(2, 1);
    expect(result).toBe(1);
  });

  it('should multiply two numbers correctly', () => {
    const result = multiplyNumbers(2, 3);
    expect(result).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    const result = divideNumbers(6, 3);
    expect(result).toBe(2);
  });

  it('should find the square root of a number correctly', () => {
    const result = findSquareRoot(100);
    expect(result).toBe(10);
  });
});
