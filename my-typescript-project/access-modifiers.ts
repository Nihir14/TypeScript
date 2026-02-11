// access-modifiers.ts
// Demonstrates public, private, protected access modifiers

class Person {
  // public (default)
  public name: string;

  // private (accessible only inside this class)
  private aadhaarNumber: string;

  // protected (accessible in child classes)
  protected age: number;

  constructor(name: string, aadhaarNumber: string, age: number) {
    this.name = name;
    this.aadhaarNumber = aadhaarNumber;
    this.age = age;
  }

  public showName(): void {
    console.log("Name:", this.name);
  }

  private showAadhaar(): void {
    console.log("Aadhaar:", this.aadhaarNumber);
  }

  protected showAge(): void {
    console.log("Age:", this.age);
  }

  public showDetails(): void {
    this.showAadhaar(); // allowed
    this.showAge();     // allowed
  }
}

// Child class
class Employee extends Person {
  constructor(name: string, aadhaarNumber: string, age: number) {
    super(name, aadhaarNumber, age);
  }

  public display(): void {
    console.log("Name:", this.name); // ✅ public
    // console.log(this.aadhaarNumber); // ❌ private
    console.log("Age:", this.age);   // ✅ protected
  }
}

// Object
const emp = new Employee("Nihir", "1234-5678-9012", 21);

emp.showName();       // ✅ public
// emp.showAadhaar(); // ❌ private
// emp.showAge();     // ❌ protected
emp.showDetails();    // ✅ public
emp.display();
