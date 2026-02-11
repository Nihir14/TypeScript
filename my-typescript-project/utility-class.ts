// utility-class.ts
// Utility class = contains only static methods (no object creation)

class MathUtil {
  // private constructor prevents instantiation
  private constructor() {}

  static add(a: number, b: number): number {
    return a + b;
  }

  static subtract(a: number, b: number): number {
    return a - b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }

  static isEven(num: number): boolean {
    return num % 2 === 0;
  }
}

// Usage (NO object creation)
console.log(MathUtil.add(10, 5));
console.log(MathUtil.subtract(10, 5));
console.log(MathUtil.multiply(10, 5));
console.log(MathUtil.isEven(10));

// ❌ Not allowed
// const util = new MathUtil();
