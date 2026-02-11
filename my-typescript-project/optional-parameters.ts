// optional-parameters.ts
// Optional parameter = parameter may or may not be passed

// 1. Basic optional parameter
function greet(name: string, title?: string): string {
  return title ? `Hello ${title} ${name}` : `Hello ${name}`;
}

console.log(greet("Nihir"));
console.log(greet("Nihir", "Mr."));

// 2. Optional parameter with number
function calculateDiscount(price: number, discount?: number): number {
  return discount ? price - price * discount : price;
}

console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 0.1));

// 3. Optional parameter in arrow function
const printUser = (id: number, email?: string): void => {
  if (email) {
    console.log(`ID: ${id}, Email: ${email}`);
  } else {
    console.log(`ID: ${id}`);
  }
};

printUser(101);
printUser(101, "user@gmail.com");

// 4. Optional parameter with object
function createUser(name: string, age?: number): object {
  return age ? { name, age } : { name };
}

console.log(createUser("Rahul"));
console.log(createUser("Rahul", 22));

// ❌ Invalid
// function wrong(a?: number, b: number) {} // Error: optional before required
