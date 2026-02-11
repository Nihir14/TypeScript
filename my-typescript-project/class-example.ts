// class-example.ts
// Demonstrates class features in TypeScript

class User {
  // properties
  id: number;
  name: string;
  private password: string;
  readonly role: string;

  // constructor
  constructor(id: number, name: string, password: string, role: string) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.role = role;
  }

  // method
  login(): void {
    console.log(`${this.name} logged in`);
  }

  // private method usage
  checkPassword(input: string): boolean {
    return this.password === input;
  }
}

// object creation
const user1 = new User(1, "Nihir", "12345", "ADMIN");

user1.login();
console.log(user1.name);
console.log(user1.role);

// ❌ Errors
// user1.password;        // private
// user1.role = "USER";   // readonly


// 2. Class with inheritance
class Employee extends User {
  department: string;

  constructor(
    id: number,
    name: string,
    password: string,
    role: string,
    department: string
  ) {
    super(id, name, password, role);
    this.department = department;
  }

  getDetails(): void {
    console.log(`${this.name} works in ${this.department}`);
  }
}

const emp = new Employee(2, "Rahul", "emp123", "USER", "IT");
emp.login();
emp.getDetails();
