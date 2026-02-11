// class-readonly-members.ts
// Demonstrates readonly members in a TypeScript class

class BankAccount {
  // readonly properties
  readonly accountNumber: number;
  readonly holderName: string;

  // normal property
  balance: number;

  constructor(accountNumber: number, holderName: string, balance: number) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = balance;
  }

  // method
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited ₹${amount}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Insufficient balance");
      return;
    }
    this.balance -= amount;
    console.log(`Withdrawn ₹${amount}`);
  }
}

// Object creation
const account = new BankAccount(123456, "Nihir", 10000);

console.log(account.accountNumber);
console.log(account.holderName);
console.log(account.balance);

// Valid operations
account.deposit(2000);
account.withdraw(3000);

// ❌ Invalid operations
// account.accountNumber = 999999; // Error: readonly
// account.holderName = "Rahul";   // Error: readonly

console.log("Final Balance:", account.balance);
