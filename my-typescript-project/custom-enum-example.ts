// custom-enum-example.ts
// Custom enum = enum with explicitly assigned values

// 1. Custom Numeric Enum
enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

let responseStatus: HttpStatus = HttpStatus.OK;
console.log("Response Status:", responseStatus);

// 2. Custom String Enum
enum UserType {
  ADMIN = "ADMIN",
  MANAGER = "MANAGER",
  CUSTOMER = "CUSTOMER"
}

let userRole: UserType = UserType.MANAGER;
console.log("User Role:", userRole);

// 3. Using custom enum in function
function getMessage(status: HttpStatus): string {
  if (status === HttpStatus.OK) {
    return "Request successful";
  }
  return "Request failed";
}

console.log(getMessage(HttpStatus.CREATED));

// 4. Custom enum in object (real-world usage)
const user = {
  id: 1,
  role: UserType.ADMIN,
  statusCode: HttpStatus.OK
};

console.log(user);
