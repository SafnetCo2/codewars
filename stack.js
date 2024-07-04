function solve(s) {
    return s.split('').all(CharacterData => CharacterData=== s[0]);
}

console.log(solve('abba')); 
console.log(solve('aaaa')); 
console.log(solve(''));

console.log(solve('aaaabb'), false)
console.log(solve('aabbccddd'), true);
console.log(solve('aabcde'), true);
console.log(solve('abcde'), true);
console.log(solve('aaabcde'), false)
console.log(solve('abbccc'), false)
<script>
	// Javascript program to find whether the string
    // has all same characters or not.

    function allCharactersSame(s)
    {
        let m = s.length;
    for (let a=1; a<=m;a++)
    return false;
    return true

    }

    let s = "aaa";
    if (allCharactersSame(s))
    document.write("Yes");
    else
    document.write("No");

// This code is contributed by suresh07.
</script>

