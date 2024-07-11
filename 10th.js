function toTitleCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

let inputString = "hello world";
let titleCaseString = toTitleCase(inputString);
console.log(titleCaseString);
