// Enable: "experimentalDecorators": true in tsconfig.json

// Class Decorator
function Logger(constructor: Function) {
  console.log("Class created:", constructor.name);
}

@Logger
class User {
  constructor() {
    console.log("User instance created");
  }
}

// Creating object
new User();
