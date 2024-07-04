def solve(s):
    from collections import Counter
    
    # Count occurrences of each character
    count_char = Counter(s)
    
    # Count how many times each frequency appears
    count_freq = Counter(count_char.values())
    
    if len(count_freq) == 1:
        return True
    
    if len(count_freq) == 2:
        (freq1, count1), (freq2, count2) = count_freq.items()
        
        if (freq1 == 1 and count1 == 1) or (freq2 == 1 and count2 == 1):
            return True
        
        if abs(freq1 - freq2) == 1 and (count1 == 1 or count2 == 1):
            return True
    
    return False

# Test cases
print(solve("aabbcc"))  # True
print(solve("aabbccc"))  # True
print(solve("abbcc"))  # True
print(solve("aabbcccddd"))  # False
function solve(s) {
    const charCount = {};

    // Step 1: Count occurrences of each character
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    const frequencies = Object.values(charCount);
    const frequencyCount = {};

    // Step 2: Count how many times each frequency appears
    for (const freq of frequencies) {
        frequencyCount[freq] = (frequencyCount[freq] || 0) + 1;
    }

    const uniqueFrequencies = Object.keys(frequencyCount).map(Number);

    // Step 3: Check if we can equalize by removing one character
    if (uniqueFrequencies.length === 1) {
        return true; // All characters already have the same frequency
    }

    if (uniqueFrequencies.length === 2) {
        const [freq1, freq2] = uniqueFrequencies;
        const [count1, count2] = [frequencyCount[freq1], frequencyCount[freq2]];

        if ((freq1 === 1 && count1 === 1) || (freq2 === 1 && count2 === 1)) {
            return true; // One character can be removed to make all frequencies equal
        }

        if ((Math.abs(freq1 - freq2) === 1) && (count1 === 1 || count2 === 1)) {
            return true; // Adjusting one character's count can equalize frequencies
        }
    }

    return false;
}

// Example usage
console.log(solve("aabbcc")); // true
console.log(solve("aabbccc")); // true
console.log(solve("aabbc")); // true
console.log(solve("aabbcccddd")); // false
