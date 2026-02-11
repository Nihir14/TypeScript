// Custom Type Guard Example

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

// Custom type guard function
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// Function using the type guard
function move(pet: Fish | Bird): void {
  if (isFish(pet)) {
    pet.swim(); // TypeScript knows pet is Fish
  } else {
    pet.fly();  // TypeScript knows pet is Bird
  }
}

// Usage
const fish: Fish = {
  swim: () => console.log("Fish is swimming")
};

const bird: Bird = {
  fly: () => console.log("Bird is flying")
};

move(fish);
move(bird);
