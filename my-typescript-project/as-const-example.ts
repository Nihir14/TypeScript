// as const = makes values readonly + literal types

// 1. Basic example
const status = {
  SUCCESS: "SUCCESS",
  FAILED: "FAILED",
  PENDING: "PENDING"
} as const;

// Type becomes:
// {
//   readonly SUCCESS: "SUCCESS";
//   readonly FAILED: "FAILED";
//   readonly PENDING: "PENDING";
// }

type Status = typeof status[keyof typeof status];

let currentStatus: Status;

currentStatus = "SUCCESS";
// currentStatus = "DONE"; // ❌ Error


// 2. as const with array
const roles = ["ADMIN", "USER", "GUEST"] as const;

type Role = typeof roles[number];

let userRole: Role;

userRole = "ADMIN";
// userRole = "MANAGER"; // ❌ Error


// 3. as const with function return (very practical)
function getDirections() {
  return ["UP", "DOWN", "LEFT", "RIGHT"] as const;
}

type Direction = typeof getDirections()[number];

let move: Direction;
move = "LEFT";
// move = "FORWARD"; // ❌ Error


// 4. as const vs normal object
const normalObj = { mode: "dark" };
// type: { mode: string }

const constObj = { mode: "dark" } as const;
// type: { readonly mode: "dark" }

console.log(status, roles, move, normalObj, constObj);
