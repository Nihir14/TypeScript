const sym1: symbol = Symbol("id");
const sym2: symbol = Symbol("id");

console.log(sym1 === sym2); // false
console.log(sym1); // Symbol(id)
console.log(sym2); // Symbol(id)


// const sym4 = Symbol.for("userId");
// const sym5 = Symbol.for("userId");

// console.log(sym4 === sym5); // true
