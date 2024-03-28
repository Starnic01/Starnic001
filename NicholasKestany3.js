// Function to reverse a string
function reverseString(str) {
    // Convert the string to an array of characters, reverse it, then join it back to a string
    return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("12345")); // Expected output: "54321"
console.log(reverseString("")); // Expected output: ""
