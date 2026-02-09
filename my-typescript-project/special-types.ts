// special-types.ts
// Demonstrates special types in TypeScript

// 1. any (no type checking)
let data: any = 10;
data = "text";
data = true;

// 2. unknown (safer than any)
let value: unknown = "Hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// 3. void (no return value)
function logMessage(msg: string): void {
  console.log(msg);
}

// 4. never (function never returns)
function throwError(message: string): never {
  throw new Error(message);
}

// 5. null
let emptyValue: null = null;

// 6. undefined
let notAssigned: undefined = undefined;

// 7. object (non-primitive)
let userObj: object = {
  id: 1,
  name: "Nihir"
};

// 8. bigint
let bigNumber: bigint = 12345678901234567890n;

// 9. symbol
let uniqueId: symbol = Symbol("id");

// Output
console.log(
  data,
  value,
  emptyValue,
  notAssigned,
  userObj,
  bigNumber,
  uniqueId
);
