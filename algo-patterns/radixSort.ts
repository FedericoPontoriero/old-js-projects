// Helpers

function getDigit(num: number, i: number): number {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num: number): number {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr: number[]): number {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; ++i) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
}

// Radix Sort

function radixSort(arr: number[]): number[] {
    let maxDigitCount = mostDigits(arr);
    for (let k = 0; k < maxDigitCount; ++k) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < arr.length; ++i) {
            let digit = getDigit(arr[i], k);
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}
