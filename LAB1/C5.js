// 5. Prime Factorization
function primeFactorization(n) {
    if (isInteger(n)) {
        const factors = [];
        let divisor = 2;
        while (divisor <= n) {
            if (n % divisor === 0) {
                factors.unshift(divisor);
                n /= divisor;
            } else {
                divisor++;
            }
        }
        return result_5 = factors;
    }
    else {
        return result_5 = "is not Interger";
    }
}

function isInteger(n) { return (Number.isInteger(n) && n > 0); }

// resultB5
primeFactorization(30)
console.log(`KQ B5: ${result_5}`)
