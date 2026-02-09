// index-signature.ts
// Index Signature = object with dynamic keys

// 1. Basic index signature
interface StringNumberMap {
  [key: string]: number;
}

const scores: StringNumberMap = {
  math: 90,
  science: 85,
  english: 88
};

// scores.history = "high"; // ❌ Error (number required)


// 2. Index signature with fixed properties
interface UserScores {
  name: string;
  [subject: string]: number | string;
}

const user: UserScores = {
  name: "Nihir",
  math: 95,
  physics: 90
};


// 3. Number index signature (array-like)
interface NumberArray {
  [index: number]: string;
}

const cities: NumberArray = {
  0: "Bhopal",
  1: "Indore"
};


// 4. Readonly index signature
interface ReadonlyConfig {
  readonly [key: string]: string;
}

const config: ReadonlyConfig = {
  env: "production",
  version: "1.0"
};

// config.env = "dev"; // ❌ Error


// Output
console.log(scores, user, cities, config);
