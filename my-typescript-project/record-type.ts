// record-type.ts
// Record<K, T> = object with fixed keys and same value type

// 1. Basic Record type
type Roles = "ADMIN" | "USER" | "GUEST";

const permissions: Record<Roles, boolean> = {
  ADMIN: true,
  USER: true,
  GUEST: false
};


// 2. Record with number values
type Subject = "math" | "science" | "english";

const marks: Record<Subject, number> = {
  math: 90,
  science: 85,
  english: 88
};


// 3. Record with object values
type UserId = number;

interface UserInfo {
  name: string;
  age: number;
}

const users: Record<UserId, UserInfo> = {
  1: { name: "Nihir", age: 21 },
  2: { name: "Rahul", age: 22 }
};


// 4. Record vs Index Signature (safe keys)
type Status = "SUCCESS" | "FAILED";

const apiStatus: Record<Status, string> = {
  SUCCESS: "Request completed",
  FAILED: "Request failed"
};

// ❌ Missing key gives error
// const wrongStatus: Record<Status, string> = { SUCCESS: "OK" };


// Output
console.log(permissions, marks, users, apiStatus);
