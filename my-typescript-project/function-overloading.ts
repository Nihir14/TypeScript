// function-overloading.ts
// Function Overloading = multiple function signatures, one implementation

/* -------------------------------------------------- */
/* Example 1: Number + Number / String + String */
/* -------------------------------------------------- */

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return a + b;
}

console.log(add(10, 20));       // 30
console.log(add("Hello ", "TS")); // Hello TS


/* -------------------------------------------------- */
/* Example 2: Optional parameter behavior */
/* -------------------------------------------------- */

function greet(name: string): string;
function greet(name: string, age: number): string;
function greet(name: string, age?: number): string {
  return age
    ? `Hello ${name}, Age: ${age}`
    : `Hello ${name}`;
}

console.log(greet("Nihir"));
console.log(greet("Nihir", 21));


/* -------------------------------------------------- */
/* Example 3: Function overload with union return */
/* -------------------------------------------------- */

function getData(id: number): number;
function getData(id: string): string;
function getData(id: number | string): number | string {
  return typeof id === "number" ? id * 10 : id.toUpperCase();
}

console.log(getData(5));
console.log(getData("user"));


/* -------------------------------------------------- */
/* Example 4: Overload with object types */
/* -------------------------------------------------- */

type Admin = { role: "ADMIN"; permissions: string[] };
type User = { role: "USER"; email: string };

function createAccount(role: "ADMIN"): Admin;
function createAccount(role: "USER"): User;
function createAccount(role: "ADMIN" | "USER"): Admin | User {
  if (role === "ADMIN") {
    return { role: "ADMIN", permissions: ["READ", "WRITE"] };
  }
  return { role: "USER", email: "user@gmail.com" };
}

console.log(createAccount("ADMIN"));
console.log(createAccount("USER"));


/* -------------------------------------------------- */
/* Example 5: Overloading vs Union (Interview Favorite) */
/* -------------------------------------------------- */

function format(value: number): string;
function format(value: string): string;
function format(value: number | string): string {
  return `Value: ${value}`;
}

console.log(format(100));
console.log(format("TS"));


// ❌ Invalid (no matching overload)
// format(true);
