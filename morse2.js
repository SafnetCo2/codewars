function thueMorse(n) {
    let frequency = "0"
    while (frequency.length < n ){
        let complements = ""
        for (let char of frequency) {
            complements+=char==='0'?'1':'0'
        }
        frequency += complements;
    }
    return frequency.slice(0, n);

}
console.log(thueMorse(1))
console.log(thueMorse(2))
console.log(thueMorse(5))
console.log(thueMorse(10))
console.log(thueMorse(16))
