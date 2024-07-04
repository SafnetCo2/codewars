function onlyDuplicates(str) {
    // your code here
    return str.split('').filter(char => str.indexOf(char) !== str.lastIndexOf(char)).join('')
}
console.log(onlyDuplicates('abccdefee'))
console.log(onlyDuplicates('hello'))

