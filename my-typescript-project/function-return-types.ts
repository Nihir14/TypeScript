// function-return-types.ts
// Demonstrates different return types in TypeScript

// 1. number return type
function add(a: number, b: number): number {
  return a + b;
}

// 2. string return type
function greet(name: string): string {
  return `Hello, ${name}`;
}

// 3. boolean return type
function isAdult(age: number): boolean {
  return age >= 18;
}

// 4. void return type (no return)
function logMessage(message: string): void {
  console.log(message);
}

// 5. never return type (never ends)
function throwError(msg: string): never {
  throw new Error(msg);
}

// 6. array return type
function getNumbers(): number[] {
  return [1, 2, 3, 4];
}

// 7. object return type
function getUser(): { id: number; name: string } {
  return { id: 1, name: "Nihir" };
}

// 8. tuple return type
function getUserInfo(): [number, string] {
  return [101, "Admin"];
}

// 9. union return type
function getResult(flag: boolean): number | string {
  return flag ? 200 : "Failed";
}

// 10. inferred return type
function multiply(a: number, b: number) {
  return a * b; // inferred as number
}

// 11. Promise return type (async)
async function fetchData(): Promise<string> {
  return "Data loaded";
}

// Output
console.log(add(2, 3));
console.log(greet("Nihir"));
console.log(isAdult(21));
logMessage("Logging message");
console.log(getNumbers());
console.log(getUser());
console.log(getUserInfo());
console.log(getResult(true));
console.log(multiply(3, 4));

fetchData().then(console.log);

// ❌ Do not call throwError() unless testing error
