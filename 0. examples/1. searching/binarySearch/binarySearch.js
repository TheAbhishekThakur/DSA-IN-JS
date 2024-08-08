// Binary Search with Sorted Array

const binarySearchWithAsec = (arr, target) => {
    if (arr.length === 0) {
        return -1;
    }
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (target < arr[mid]) {
            end = mid - 1;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}
const res = binarySearchWithAsec([-2, 3, 4, 6, 8, 12], 8);
console.log(res);