function pivot(arr: number[], start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; ++i) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}

function swap(arr: number[], i: number, j: number): void {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
