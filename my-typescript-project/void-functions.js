// void-functions.ts
// void = function does not return any value
// 1. Simple void function
function greet(name) {
    console.log("Hello, ".concat(name));
}
// 2. Void function with multiple statements
function printSum(a, b) {
    var sum = a + b;
    console.log("Sum:", sum);
}
// 3. Void function as arrow function
var logStatus = function (status) {
    console.log("Status:", status);
};
// 4. Void function used in callback
function processData(callback) {
    console.log("Processing...");
    callback();
}
// Calling functions
greet("Nihir");
printSum(10, 20);
logStatus(true);
processData(function () {
    console.log("Callback executed");
});
// ❌ Invalid usage
// function wrong(): void {
//   return 10; // Error: Type 'number' is not assignable to void
// }
