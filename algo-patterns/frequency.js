// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.
// // Naive solution
// function same(arr1: Array<number>, arr2: Array<number>): boolean {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }
//     return true;
// }
// Refactored
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    var frequencyCounter1 = {};
    var frequencyCounter2 = {};
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var val = arr1_1[_i];
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var val = arr2_1[_a];
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (var key in frequencyCounter1) {
        if (!(Math.pow(key, 2) in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[Math.pow(key, 2)] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)
