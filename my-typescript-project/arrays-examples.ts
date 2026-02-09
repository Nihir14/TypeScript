// arrays-examples.ts
// Demonstrates different ways to use arrays in TypeScript

// 1. Using type[]
let numbers: number[] = [1, 2, 3];

// 2. Using Array<type>
let names: Array<string> = ["Nihir", "Rahul"];

// 3. Type inference
let scores = [90, 85, 88]; // inferred as number[]

// 4. Union type array (mixed types)
let mixedData: (number | string)[] = [1, "two", 3];

// 5. Any array
let anyValues: any[] = [1, "hello", true];

// 6. Readonly array
let colors: readonly string[] = ["red", "blue"];
// colors.push("green"); // ❌ Error

// 7. Tuple (fixed length & types)
let user: [number, string] = [1, "Admin"];

// 8. Object array
let users: { id: number; name: string }[] = [
  { id: 1, name: "Nihir" },
  { id: 2, name: "Amit" }
];

// 9. Array of arrays (2D array)
let matrix: number[][] = [
  [1, 2],
  [3, 4]
];

// Output
console.log(
  numbers,
  names,
  scores,
  mixedData,
  anyValues,
  colors,
  user,
  users,
  matrix
);
