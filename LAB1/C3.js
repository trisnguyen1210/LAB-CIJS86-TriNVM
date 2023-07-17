// 3. Beans counting
function countBs(str) {
    return result_3 = countChar(str, 'B');
}
function countChar(input_as_string, char) {
    let count = 0;
    for (let i = 0; i < input_as_string.length; i++) {
        if (input_as_string[i] === char) { count++; }
    }
    return result_3 = count;
}
// resultB3
console.log(`KQ B3:`)
countBs("aaaaaaaaaaaaaaa")
console.log(`\tcountBs: ${result_3}`)
countChar("aaaaaaaaaaaaaaa", "a")
console.log(`\tcountChar: ${result_3}`);
