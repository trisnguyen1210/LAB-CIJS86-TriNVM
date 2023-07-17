// 6. The Recamán Sequence
function recamanIndex(number) {
    let sequence = [0];
    let i = 1;

    while (true) {
        if (sequence[sequence.length - 1] === number) { break; }

        let prevValue = sequence[i - 1];
        let currentValue = prevValue - i;

        if (sequence.includes(currentValue) || currentValue < 0) {
            currentValue = prevValue + i;
        }

        sequence.push(currentValue);
        i++;
    }

    return result_6 = [sequence.length - 1, sequence];
}

// resultB6
console.log(`KQ B6:`)
recamanIndex(2);
console.log(`\tvalue: ${result_6[0]}\n\tarray: ${result_6[1]}`);
recamanIndex(3)
console.log(`\tvalue: ${result_6[0]}\n\tarray: ${result_6[1]}`);
recamanIndex(7)
console.log(`\tvalue: ${result_6[0]}\n\tarray: ${result_6[1]}`);