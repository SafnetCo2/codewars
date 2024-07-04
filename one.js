function solve(s) {
    // Function to check if two strings can be made equal by removing exactly one character
    function solve(s, t) {
        let m = s.length;
        let n = t.length;

        // If lengths differ by more than 1, return false
        if (Math.abs(m - n) > 1) {
            return false;
        }

        // Find the first difference
        let i = 0;
        while (i < m && i < n) {
            if (s[i] !== t[i]) {
                break;
            }
            i++;
        }

        // If both strings are already equal
        if (i === m && i === n) {
            return false;
        }

        // Check if removing one character can make them equal
        if (m === n) {
            // Check if removing one character in the middle makes them equal
            return s.substring(i + 1) === t.substring(i + 1);
        } else if (m > n) {
            // Check if removing one character from s makes it equal to t
            return s.substring(i + 1) === t.substring(i);
        } else { // n > m
            // Check if removing one character from t makes it equal to s
            return s.substring(i) === t.substring(i + 1);
        }
    }

    // Iterate through each character of s and check if removing it can make the string equal to the original s
    for (let i = 0; i < s.length; i++) {
        let modifiedString = s.slice(0, i) + s.slice(i + 1);
        if (solve(modifiedString, s)) {
            return true;
        }
    }

    return false;
}

// Example usage:
describe("Basic tests", function () {
    it("should return true for valid cases", function () {
        Test.assertEquals(solve('aaaa'), true);
        Test.assertEquals(solve('abbba'), true);
        Test.assertEquals(solve('aabbccddd'), true);
        Test.assertEquals(solve('aabcde'), true);
        Test.assertEquals(solve('abcde'), true);
    });

    it("should return false for invalid cases", function () {
        Test.assertEquals(solve('abba'), false);
        Test.assertEquals(solve('aabbcc'), false);
        Test.assertEquals(solve('aaaabb'), false);
        Test.assertEquals(solve('aaabcde'), false);
        Test.assertEquals(solve('abbccc'), false);
    });
});
