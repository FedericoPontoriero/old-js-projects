// Naive
function naiveBubbleSort(arr: number[]): number[] {
    // const swap = (
    //     arr: Array<number> | number,
    //     idx1: number,
    //     idx2: number
    // ): void => {
    //     [arr[idx1], arr[idx2]] = [arr[idx2], [arr[idx1]]];
    // };

    let noSwaps: boolean;
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap(arr, j, j + 1);
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(naiveBubbleSort([37, 45, 29, 8]));
