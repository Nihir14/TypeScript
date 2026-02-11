// ===============================
// PRACTICAL EXAMPLE 1
// Safe property reader
// ===============================

type User = {
  id: number;
  name: string;
  email: string;
};

function readUserProperty(user: User, key: keyof User) {
  return user[key];
}

const user: User = {
  id: 1,
  name: "Nihir",
  email: "nihir@gmail.com"
};

console.log(readUserProperty(user, "name"));


// ===============================
// PRACTICAL EXAMPLE 2
// Update object safely
// ===============================

function updateUser(
  user: User,
  key: keyof User,
  value: User[keyof User]
) {
  user[key] = value;
}

updateUser(user, "name", "Nihir Verma");
updateUser(user, "id", 2);
// updateUser(user, "email", 123); // ❌ Error

console.log(user);


// ===============================
// PRACTICAL EXAMPLE 3
// keyof with generics (VERY IMPORTANT)
// ===============================

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(user, "email"));
// getValue(user, "age"); // ❌ Error


// ===============================
// PRACTICAL EXAMPLE 4
// Form validation keys
// ===============================

type LoginForm = {
  username: string;
  password: string;
};

type LoginFormField = keyof LoginForm; // "username" | "password"

function validateField(field: LoginFormField) {
  console.log(`Validating ${field}`);
}

validateField("username");
// validateField("email"); // ❌ Error


// ===============================
// PRACTICAL EXAMPLE 5
// Config mapping (REAL PROJECT USE)
// ===============================

type AppConfig = {
  port: number;
  env: string;
  debug: boolean;
};

const config: AppConfig = {
  port: 3000,
  env: "dev",
  debug: true
};

function readConfig(key: keyof AppConfig) {
  return config[key];
}

console.log(readConfig("port"));
