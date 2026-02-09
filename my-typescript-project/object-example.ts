// object-example.ts
// Different ways to work with objects in TypeScript

// 1. Simple object with type inference
let user = {
  id: 1,
  name: "Nihir",
  isActive: true
};

// user.id = "one"; // ❌ Error (number expected)

// 2. Object with explicit type
let employee: { id: number; name: string; role: string } = {
  id: 101,
  name: "Rahul",
  role: "Developer"
};

// 3. Object using type alias
type Product = {
  id: number;
  name: string;
  price: number;
};

let product: Product = {
  id: 1,
  name: "Laptop",
  price: 55000
};

// 4. Object using interface
interface Student {
  rollNo: number;
  name: string;
  marks: number;
}

let student: Student = {
  rollNo: 12,
  name: "Amit",
  marks: 85
};

// 5. Optional properties
interface Car {
  brand: string;
  model: string;
  year?: number; // optional
}

let car: Car = {
  brand: "Tata",
  model: "Nexon"
};

// 6. Readonly property
interface Account {
  readonly accountNo: number;
  holderName: string;
}

let account: Account = {
  accountNo: 123456,
  holderName: "Nihir"
};

// account.accountNo = 999; // ❌ Error

// Output
console.log(user, employee, product, student, car, account);
