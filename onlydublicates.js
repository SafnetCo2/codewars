function removeUniqueCharacters(str) {
    // Step 1: Count the frequency of each character
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Filter out unique characters
    return str.split('').filter(char => charCount[char] > 1).join('');
}

// Test cases
console.log(removeUniqueCharacters("abccdefee")); // Output: "cceee"
console.log(removeUniqueCharacters("aabbcc"));    // Output: "aabbcc"
console.log(removeUniqueCharacters("abcd"));      // Output: ""
console.log(removeUniqueCharacters("aabbccdde")); // Output: "aabbccdde"
