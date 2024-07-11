function Tony(expression) {
    try {
        let initialized = expression.replace(/\s+/g, '');
        let result = new Function('return ' + initialized)(); 
        return result;
    } catch (error) {
        return 'invalid';
    }
}
let expression = "2 + 44 - 3 + 12";
let result = Tony(expression);
console.log(result);
