function filterEvenNumbers(arr) {
    let evenNumbers = arr.filter(num => num % 2 === 0);
    return evenNumbers;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumbers = filterEvenNumbers(numbers);
console.log(filteredNumbers);
