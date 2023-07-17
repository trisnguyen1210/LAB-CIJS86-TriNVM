// 4. Semiprimes
function checkSemiprime(number) {
    if (isSemiprime(number)) {
        return result_4 = "Semiprime";
    }
    else if (isSquarefreeSemiprime(number)) {
        return result_4 = "Squarefree Semiprime";
    }
    else {
        return result_4 = "Neither";
    }
}

function processSemiprime(number) {
    const factors = [];
    let divisor = 2;
    while (number > 1 && factors.length <= 2) {
        if (number % divisor === 0) {
            factors.push(divisor);
            number /= divisor;
        }
        else {
            divisor++;
        }
    }
    return [factors, number]
}

function isSemiprime(number) {
    factors = processSemiprime(number)[0];
    number = processSemiprime(number)[1];
    return factors.length === 2 && factors[0] === factors[1] && number === 1;
}

function isSquarefreeSemiprime(number) {
    factors = processSemiprime(number)[0];
    number = processSemiprime(number)[1];
    return factors.length === 2 && factors[0] !== factors[1] && number === 1;
}

// resultB4
console.log(`KQ B4: `);
checkSemiprime(49);
console.log(`${result_4}`);
checkSemiprime(15);
console.log(`${result_4}`);
checkSemiprime(97);
console.log(`${result_4}`);