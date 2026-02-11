// keyof operator example
// keyof = gets all keys of an object type as a union

type User = {
  id: number;
  name: string;
  email: string;
};

// keyof User => "id" | "name" | "email"
type UserKeys = keyof User;

let key1: UserKeys;

key1 = "id";
key1 = "name";
// key1 = "age"; // ❌ Error


// Using keyof in function (very important use case)
function getProperty(obj: User, key: keyof User) {
  return obj[key];
}

const user: User = {
  id: 1,
  name: "Nihir",
  email: "nihir@gmail.com"
};

console.log(getProperty(user, "id"));
console.log(getProperty(user, "name"));
