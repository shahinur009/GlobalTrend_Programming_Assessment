function flattenArray(nestedArray) {
    let flatArray = [];
    function flatten(element) {
        if (Array.isArray(element)) {
            for (let item of element) {
                flatten(item);
            }
        } else {
            flatArray.push(element);
        }
    }
    flatten(nestedArray);
    return flatArray;
}
let nestedArray = [1, [2, [3, 4], 5], 6, [7, 8, [9]]];
let result = flattenArray(nestedArray);

console.log(result);
