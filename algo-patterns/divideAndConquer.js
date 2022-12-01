// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1
// Naive
// const search = (arr: number[], val: number): number => {
//     for (let i = 0; i < arr.length; ++i) {
//         if (arr[i] === val) {
//             return i;
//         }
//     }
//     return -1
// }
var search = function (arr, val) {
    var min = 0;
    var max = arr.length - 1;
    while (min <= max) {
        var middle = Math.floor((min + max) / 2);
        var currentElement = arr[middle];
        if (currentElement < val) {
            min = middle + 1;
        }
        else if (currentElement > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
};
console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
