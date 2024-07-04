function solve(s) {
    // Count occurrences of each character
    const countChar = {};
    for (const char of s) {
        countChar[char] = (countChar[char] || 0) + 1;
    }

    // Count how many times each frequency appears
    const countFreq = {};
    for (const key in countChar) {
        const freq = countChar[key];
        countFreq[freq] = (countFreq[freq] || 0) + 1;
    }

    const freqValues = Object.values(countFreq);
    const freqKeys = Object.keys(countFreq);

    // If there is only one unique frequency, it is already valid
    if (freqValues.length === 1) {
        return true;
    }

    // If there are exactly two different frequencies
    if (freqValues.length === 2) {
        const freq1 = parseInt(freqKeys[0]);
        const count1 = freqValues[0];
        const freq2 = parseInt(freqKeys[1]);
        const count2 = freqValues[1];

        // Case 1: One frequency is 1 and it occurs only once (removing this character could equalize the remaining characters' frequencies)
        if ((freq1 === 1 && count1 === 1) || (freq2 === 1 && count2 === 1)) {
            return true;
        }

        // Case 2: The difference between the two frequencies is 1, and the higher frequency occurs only once (removing one character from this higher frequency could equalize the frequencies)
        if (Math.abs(freq1 - freq2) === 1 && (count1 === 1 || count2 === 1)) {
            return true;
        }
    }

    return false;
}

// Test cases
console.log(solve('aaaa')); // true
console.log(solve('abba')); // false
console.log(solve('abbba')); // true
console.log(solve('wwwf')); // true
console.log(solve('aabbcc')); // false
console.log(solve('aaaabb')); // false
console.log(solve('aabbccddd')); // true
console.log(solve('aabcde')); // true
console.log(solve('abcde')); // true
console.log(solve('aaabcde')); // false
console.log(solve('abbccc')); // false
console.log(solve('aabbccdddeee')); // false
