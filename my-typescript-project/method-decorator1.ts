// Enable in tsconfig.json:
// "experimentalDecorators": true
// "target": "esnext"

/**
 * Modern Method Decorator (TS 5+)
 * Replacement for (target, methodName, descriptor)
 */
function LogMethod(
  originalMethod: Function,
  context: ClassMethodDecoratorContext
) {
  return function (this: any, ...args: any[]) {
    console.log(`Calling ${String(context.name)} with`, args);

    const result = originalMethod.apply(this, args);

    console.log("Result:", result);
    return result;
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(10, 5);
