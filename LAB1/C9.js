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
console.log(`KQ B9: `)
translatePigLatin("california");
console.log(`\t${result_9}`)
translatePigLatin("paragraphs");
console.log(`\t${result_9}`)
translatePigLatin("algorithm");
console.log(`\t${result_9}`)
translatePigLatin("schwartz");
console.log(`\t${result_9}`)