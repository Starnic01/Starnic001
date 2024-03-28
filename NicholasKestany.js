// Function: isPalindrome
// Description: Checks if a given string is a palindrome.
// Parameters:
// - str: A string to be checked for palindrome.
// Returns:
// - true if the string is a palindrome, false otherwise.
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Compare the reversed string with the original alphanumeric string
    return alphanumericStr === alphanumericStr.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome("radar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // true
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("Racecar")); // true
