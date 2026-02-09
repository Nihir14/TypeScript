// tuple-example.ts
// Tuple = fixed length + fixed types

// Tuple declaration
type UserInfo = [number, string, boolean];

// Using tuple
let user1: UserInfo = [101, "Nihir", true];
let user2: UserInfo = [102, "Rahul", false];

// Accessing tuple values
console.log("ID:", user1[0]);
console.log("Name:", user1[1]);
console.log("Active:", user1[2]);

// Updating allowed values
user1[1] = "Nihir Verma";
user1[2] = false;

// ❌ Invalid operations (compile-time errors)
// user1[0] = "one";      // Wrong type
// user1[3] = "extra";    // Index out of range

// Tuple in function return type
function getUser(): UserInfo {
  return [201, "Admin", true];
}

const user = getUser();
console.log(user);

// Tuple array (real-world usage)
let users: UserInfo[] = [
  [1, "Amit", true],
  [2, "Sumit", false]
];

console.log(users);
