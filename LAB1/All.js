// 1. Remove all dollar sign of a string
function removeDollarSign(text) {
    return result_1 = text.replaceAll('$', '');
};
// resultB1
removeDollarSign('$80% percent of $life is to show $up')
console.log(`KQ B1: ${result_1}`)

// 2. Binary Agents
function binaryAgent(str) {
    return result_2 = str.split(' ').map(letter => String.fromCharCode(parseInt(letter, 2))).join('')
};
// resultB2
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
console.log(`KQ B2: ${result_2}`)

// 3. Beans counting
function countBs(str) {
    return result_3_countBs = countChar(str, 'B');
}
function countChar(input_as_string, char) {
    let count = 0;
    for (let i = 0; i < input_as_string.length; i++) {
        if (input_as_string[i] === char) { count++; }
    }
    return result_3_countChar = count;
}
// resultB3
countBs("aaaaaaaaaaaaaaa")
countChar("aaaaaaaaaaaaaaa", "a")
console.log(`KQ B3:\n\tcountChar: ${result_3_countChar}\n\tcountBs: ${result_3_countBs}`)

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
checkSemiprime(49)
// checkSemiprime(97)
// checkSemiprime(15)
console.log(`KQ B4: ${result_4}`)

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

// 6. The Recamán Sequence
function recamanSequence(number) {
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
recamanSequence(2);
console.log(`KQ B6:\n\tvalue: ${result_6[0]}\n\tarray: ${result_6[1]}`);

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

// 8. Spinal Tap Case
function spinalCase(str) {
    str = str.replace(/_/g, "-").replace(/\s+/g, "-");
    str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
    str = str.toLowerCase();
    return result_8 = str
}

// resultB8
// spinalCase('This Is Spinal Tap')
// spinalCase('thisIsSpinalTap')
spinalCase('The_Andy_Griffith_Show')
console.log(`KQ B8: ${result_8}`)

// 9. Pig Latin

function translatePigLatin(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let beginWord = str[0];
    if (vowels.includes(beginWord)) {
        return result_9 = str + 'way';
    }
    else {
        let consonants = '';
        let i = 0;

        while (!vowels.includes(str[i])) {
            consonants += str[i];
            i++;
        }
        return result_9 = str.slice(i) + consonants + 'ay';
    }
}


//resultB9
// translatePigLatin("california");
// translatePigLatin("paragraphs");
// translatePigLatin("algorithm");
translatePigLatin("schwartz");
console.log(`KQ B9: ${result_9}`);

// 10. Callback
var Pokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata"]
Pokemon.forEach(element => {
    console.log(`Hello ${element}`);
});

newArrayPokemon = Pokemon.map((pokemon, index) => {
    newIndex = (index + 1).toString().padStart(2, 0);
    return `${newIndex}_${pokemon}`;
})
console.log(newArrayPokemon);

