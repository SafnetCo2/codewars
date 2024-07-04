
function thueMorse(n) {
    let sequence = "0";

    while (sequence.length < n) {
        let complement = '';
        for (let char of sequence) {
            complement += char === '0' ? '1' : '0';
        }
        sequence += complement;
    }

    return sequence.slice(0, n);
}

// Test cases
console.log(thueMorse(1));  // Expected output: "0"
console.log(thueMorse(2));  // Expected output: "01"
console.log(thueMorse(5));  // Expected output: "01101"
console.log(thueMorse(10)); // Expected output: "0110100110"
console.log(thueMorse(16)); // Expected output: "0110100110010110"

// Explanation:
// Initialization: Start with the sequence "0".
// Loop Until Desired Length: Keep appending the bitwise complement of the current sequence until the sequence length is at least
// 𝑛
// n.
// Bitwise Complement: For each character in the sequence, append '1' if the character is '0', and '0' if the character is '1'.
// Return Result: Slice the sequence to return only the first
// 𝑛
// n digits.
//     Examples:
// For
// 𝑛
//     =
//     1
// n = 1, the output is "0".
//     For
// 𝑛
//     =
//     2
// n = 2, the output is "01".
//     For
// 𝑛
//     =
//     5
// n = 5, the output is "01101".
//     For
// 𝑛
//     =
//     10
// n = 10, the output is "0110100110".
// This function efficiently generates the Thue - Morse sequence and ensures the output has the correct number of digits.

