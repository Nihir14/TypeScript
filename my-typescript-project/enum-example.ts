// enum-example.ts
// Enum = fixed set of named constants

// 1. Numeric Enum (default)
enum UserRole {
  ADMIN,
  USER,
  GUEST
}

let role1: UserRole = UserRole.ADMIN;
console.log("Role1:", role1); // 0

// 2. Numeric Enum with custom values
enum OrderStatus {
  PENDING = 1,
  CONFIRMED,
  SHIPPED,
  DELIVERED
}

let status: OrderStatus = OrderStatus.SHIPPED;
console.log("Status:", status); // 3

// 3. String Enum (recommended)
enum PaymentStatus {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
  PENDING = "PENDING"
}

let payment: PaymentStatus = PaymentStatus.SUCCESS;
console.log("Payment:", payment);

// 4. Enum used in function
function checkAccess(role: UserRole): string {
  if (role === UserRole.ADMIN) {
    return "Full Access";
  }
  return "Limited Access";
}

console.log(checkAccess(UserRole.USER));

// 5. Enum in object
const user = {
  name: "Nihir",
  role: UserRole.ADMIN
};

console.log(user);
