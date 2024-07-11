function removeDuplicates(arr) {
    let uniqueArray = [...new Set(arr)];
    return uniqueArray;
}
let arrayWithDuplicates = [1, 2, 3, 4, 2, 3, 5];
let newArray = removeDuplicates(arrayWithDuplicates);
console.log(newArray);
