// never-examples.ts
// never = function that never returns normally

// 1. Function that always throws an error
function throwError(message: string): never {
  throw new Error(message);
}

// 2. Function with infinite loop
function infiniteLoop(): never {
  while (true) {
    console.log("Running forever...");
  }
}

// 3. never in exhaustive check (very important use case)
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.side * shape.side;
    default:
      const _exhaustiveCheck: never = shape; // compile-time safety
      return _exhaustiveCheck;
  }
}

// Valid calls
console.log(getArea({ kind: "circle", radius: 5 }));
console.log(getArea({ kind: "square", side: 4 }));

// ❌ Invalid usage
// let value: never = 10; // Error
