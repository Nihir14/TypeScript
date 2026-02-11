// Type Guards = narrow down union types safely

/* ---------------------------------
   1. typeof type guard
--------------------------------- */
function printValue(value: number | string) {
  if (typeof value === "number") {
    console.log("Number:", value.toFixed(2));
  } else {
    console.log("String:", value.toUpperCase());
  }
}

printValue(10);
printValue("hello");


/* ---------------------------------
   2. instanceof type guard
--------------------------------- */
class Dog {
  bark() {
    console.log("Dog barking");
  }
}

class Cat {
  meow() {
    console.log("Cat meowing");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());


/* ---------------------------------
   3. in operator type guard
--------------------------------- */
type Admin = {
  role: "ADMIN";
  permissions: string[];
};

type User = {
  role: "USER";
  email: string;
};

function checkPerson(person: Admin | User) {
  if ("permissions" in person) {
    console.log("Admin permissions:", person.permissions);
  } else {
    console.log("User email:", person.email);
  }
}

checkPerson({ role: "ADMIN", permissions: ["READ", "WRITE"] });
checkPerson({ role: "USER", email: "user@gmail.com" });


/* ---------------------------------
   4. Custom type guard (MOST IMPORTANT)
--------------------------------- */
type Car = {
  type: "car";
  drive(): void;
};

type Bike = {
  type: "bike";
  ride(): void;
};

function isCar(vehicle: Car | Bike): vehicle is Car {
  return vehicle.type === "car";
}

function useVehicle(vehicle: Car | Bike) {
  if (isCar(vehicle)) {
    vehicle.drive(); // Car
  } else {
    vehicle.ride();  // Bike
  }
}

useVehicle({ type: "car", drive: () => console.log("Driving car") });
useVehicle({ type: "bike", ride: () => console.log("Riding bike") });
