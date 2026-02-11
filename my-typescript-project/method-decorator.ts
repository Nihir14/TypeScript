// Make sure in tsconfig.json:
// "experimentalDecorators": true
// "target": "esnext"

/**
 * FULL Method Decorator (TS 5+ / Modern Decorators)
 * Logs method name, arguments, and return value
 */
function LogMethod(
  originalMethod: Function,
  context: ClassMethodDecoratorContext
) {
  // Ensure decorator is applied only to methods
  if (context.kind !== "method") {
    throw new Error("LogMethod can only be used on methods");
  }

  return function (this: any, ...args: any[]) {
    console.log(`➡ Method called: ${String(context.name)}`);
    console.log("   Arguments:", args);

    const result = originalMethod.apply(this, args);

    console.log("   Return value:", result);
    return result;
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }

  @LogMethod
  subtract(a: number, b: number): number {
    return a - b;
  }

  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Usage
const calc = new Calculator();

console.log("Add Result:", calc.add(10, 5));
console.log("Subtract Result:", calc.subtract(10, 5));
console.log("Multiply Result:", calc.multiply(10, 5));
