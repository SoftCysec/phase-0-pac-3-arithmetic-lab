// Addition
function add(a, b) {
    return a + b;
}

// Subtraction
function subtract(a, b) {
    return a - b;
}

// Multiply
function multiply(a, b) {
    return a * b;
}

// Divide
function divide(a, b) {
    return a / b;
}

// Increment
function increment(a) {
    return (a = a + 1);
}

// Decrement
function decrement(a) {
    return (a = a - 1);
}

// using parseInt()
function makeInt(a) {
    return parseInt(a, 10);
}

// using parseInt()
function preserveDecimal(a) {
    return parseFloat(a);
}

// calling the functions
console.log(makeInt("456", 10));
console.log(preserveDecimal(40.62625299917));