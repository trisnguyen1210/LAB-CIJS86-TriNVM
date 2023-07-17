// 7. Hailstone Sequence
function hailstone(number) {
    let sequence = [];
    sequence.push(number);
    let i = 0;
    while (true) {
        let currentValue = sequence[i];
        if (currentValue === 1) { break; }

        if (isEven(currentValue)) {
            sequence.push(currentValue / 2);
            i++;
        }
        else {
            sequence.push(currentValue * 3 + 1);
            i++;
        }
    }
    return result_7 = sequence
};

function isEven(number) { return number % 2 === 0 };

// resultB7
hailstone(7);
console.log(`KQ B7: ${result_7}`)