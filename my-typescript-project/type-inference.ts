// Type Inference in TypeScript

// 1. Inferred as number
let count = 10;
// count = "ten"; // ❌ Error

// 2. Inferred as string
let username = "Nihir";
// username = 123; // ❌ Error

// 3. Inferred as boolean
let isLoggedIn = true;

// 4. Inferred array type (number[])
let scores = [90, 85, 88];
// scores.push("100"); // ❌ Error

// 5. Inferred object type
let user = {
  id: 1,
  name: "Admin",
  active: true
};

// user.id = "one"; // ❌ Error

// 6. Function return type inferred as number
function add(a: number, b: number) {
  return a + b;
}

// 7. Function return type inferred as string
function greet(name: string) {
  return `Hello, ${name}`;
}

// 8. Inferred union type
let mixed = [1, "two", true];

// 9. Const inference (literal type)
const role = "ADMIN";
// role = "USER"; // ❌ Error

console.log(count, username, isLoggedIn, scores, user, add(2, 3), greet("Nihir"), mixed, role);
