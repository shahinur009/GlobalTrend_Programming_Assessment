function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let sortedStr1 = str1.toLowerCase().split('').sort().join('');
    let sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
let str1 = "listen";
let str2 = "silent";

let result = areAnagrams(str1, str2);
console.log(result); // true

str1 = "hello";
str2 = "world";

result = areAnagrams(str1, str2);
console.log(result); // false
