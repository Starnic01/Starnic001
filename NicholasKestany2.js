function isEven(num) {
    // Check if the number is divisible by 2
    // If the remainder is 0, then it's even, return true
    // Otherwise, return false
    return num % 2 === 0;
}

// Test cases
console.log(isEven(4)); // Expected output: true
console.log(isEven(7)); // Expected output: false
console.log(isEven(-2)); // Expected output: true
