function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    let fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}
let n = 10;
let fibNumbers = fibonacci(n);
console.log(fibNumbers);
