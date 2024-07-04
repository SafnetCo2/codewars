from collections import Counter

def solve(s):
    for apples in range(len(s)):
        counts = Counter(s[:apples] + s[apples + 1:])
        if len(set(counts.values())) == 1:
            return True
    return False
