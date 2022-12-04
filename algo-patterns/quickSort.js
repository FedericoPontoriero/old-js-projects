function pivot(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length + 1; }
    var pivot = arr[start];
    var swapIndex = start;
    for (var i = start + 1; i < arr.length; ++i) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, start, swapIndex);
    return swapIndex;
}
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function quickSort(arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left < right) {
        var pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
