// void-functions.ts
// void = function does not return any value

// 1. Simple void function
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

// 2. Void function with multiple statements
function printSum(a: number, b: number): void {
  const sum = a + b;
  console.log("Sum:", sum);
}

// 3. Void function as arrow function
const logStatus = (status: boolean): void => {
  console.log("Status:", status);
};

// 4. Void function used in callback
function processData(callback: () => void): void {
  console.log("Processing...");
  callback();
}

// Calling functions
greet("Nihir");
printSum(10, 20);
logStatus(true);

processData(() => {
  console.log("Callback executed");
});

// ❌ Invalid usage
// function wrong(): void {
//   return 10; // Error: Type 'number' is not assignable to void
// }
