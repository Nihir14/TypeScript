// function-type-alias.ts
// Function Type Alias = define function structure using type

// 1. Basic function type alias
type Calculator = (a: number, b: number) => number;

const add: Calculator = (x, y) => x + y;
const subtract: Calculator = (x, y) => x - y;

console.log(add(10, 5));
console.log(subtract(10, 5));


// 2. Function type alias with void return
type Logger = (message: string) => void;

const log: Logger = (msg) => {
  console.log("Log:", msg);
};

log("Application started");


// 3. Function type alias with union return type
type ApiResponse = (success: boolean) => number | string;

const getResponse: ApiResponse = (flag) => {
  return flag ? 200 : "Error";
};

console.log(getResponse(true));
console.log(getResponse(false));


// 4. Function type alias with optional parameter
type Greet = (name: string, title?: string) => string;

const greetUser: Greet = (name, title) => {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
};

console.log(greetUser("Nihir"));
console.log(greetUser("Nihir", "Mr."));


// ❌ Invalid example
// const wrong: Calculator = (a: number) => a; // Error: parameter mismatch
