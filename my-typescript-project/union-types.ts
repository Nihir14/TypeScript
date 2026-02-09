// union-types.ts
// Union Types = variable can be one of multiple types

// 1. Basic union type
let id: number | string;

id = 101;
id = "A102";
// id = true; // ❌ Error


// 2. Union with functions (type narrowing)
function printId(value: number | string): void {
  if (typeof value === "number") {
    console.log("ID (number):", value.toFixed(0));
  } else {
    console.log("ID (string):", value.toUpperCase());
  }
}

printId(10);
printId("user01");


// 3. Union with arrays
let data: (number | string)[] = [1, "two", 3];


// 4. Union with object types
type Admin = {
  role: "ADMIN";
  permissions: string[];
};

type User = {
  role: "USER";
  email: string;
};

type Person = Admin | User;

const p1: Person = {
  role: "ADMIN",
  permissions: ["READ", "WRITE"]
};

const p2: Person = {
  role: "USER",
  email: "user@gmail.com"
};


// 5. Union with literal types
type Status = "SUCCESS" | "FAILED" | "PENDING";

let apiStatus: Status = "SUCCESS";
// apiStatus = "DONE"; // ❌ Error


// 6. Union return type
function getValue(flag: boolean): number | string {
  return flag ? 100 : "Not Available";
}


// Output
console.log(id, data, p1, p2, apiStatus, getValue(true));
