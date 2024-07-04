function solve(s) {
  const frequencyMap = {};
  for (let char of s) {
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
}
    }
    return frequencyMap;
}

function hasTwoFrequencies(s) {
    const frequencyMap = countCharacterFrequency(s);
    const frequencies = Object.values(frequencyMap);

    if (frequencies.length !== 2) {
        return false;
    }

    const [freq1, freq2] = frequencies
return freq1 === 1 || freq2 === 1 || Math.abs(freq1 - freq2) === 1;
}

console.log(solve('aabb')); // false
console.log(solve('aabc')); // true
console.log(solve('aaabb')); // true
console.log(solve('aaaabb')); // false
console.log(solve('')); // false
