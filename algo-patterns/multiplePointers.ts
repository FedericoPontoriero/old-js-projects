// Write a function sumZero which accepts a sorted array of integers. The function should find the first pair wheer the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive solution
// function sumZero(arr: Array<number>) {
//     for (let i = 0; i < arr.length; ++i) {
//         for (let j = 0; j < arr.length; ++j) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// Refactored
function sumZero(arr: Array<number>): Array<number> | undefined {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
