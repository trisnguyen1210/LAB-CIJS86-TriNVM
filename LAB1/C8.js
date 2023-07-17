// 8. Spinal Tap Case
function spinalCase(str) {
    str = str.replace(/_/g, "-").replace(/\s+/g, "-");
    str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
    str = str.toLowerCase();
    return result_8 = str
}

// resultB8
console.log(`KQ B8: `)
spinalCase('This Is Spinal Tap')
console.log(`\t${result_8}`)
spinalCase('thisIsSpinalTap')
console.log(`\t${result_8}`)
spinalCase('The_Andy_Griffith_Show')
console.log(`\t${result_8}`)