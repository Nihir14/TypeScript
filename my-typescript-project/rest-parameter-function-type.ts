// rest-parameter-function-type.ts
// Demonstrates rest parameters and function types

// 1. Rest parameter (variable number of arguments)
function sum(...numbers: number[]): number {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(10, 20));
console.log(sum(1, 2, 3, 4, 5));


// 2. Rest parameter with mixed logic
function printNames(prefix: string, ...names: string[]): void {
  names.forEach(name => {
    console.log(`${prefix} ${name}`);
  });
}

printNames("Mr.", "Nihir", "Rahul", "Amit");


// 3. Function type (type alias)
type MathOperation = (a: number, b: number) => number;

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

console.log(add(5, 3));
console.log(multiply(5, 3));


// 4. Function type with rest parameter
type Logger = (...messages: string[]) => void;

const logMessages: Logger = (...msgs) => {
  msgs.forEach(msg => console.log(msg));
};

logMessages("App started", "User logged in", "Process completed");


// ❌ Invalid examples
// function wrong(...nums: number[], value: number) {} // Error: rest must be last
