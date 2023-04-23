let arr = [11, 25, 36, 41, 72, 110];
let target = 11;
console.log(binarySearch(arr, 11));
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return mid;
        else if (arr[mid] < target)
            l = mid + 1;
        else
            r = mid - 1;
    }
    return -1;
}