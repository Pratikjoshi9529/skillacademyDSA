let arr = [11, 25, 36, 41, 72, 110];
let target = 27;
console.log(binarySearch(arr, target));
function binarySearch(arr, target) {
    let l = 0;
    let r = arr.length;
    let floor = -1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] == target)
            return "target found at position " + mid;
        else if (arr[mid] < target) {
            floor = arr[mid];
            l = mid + 1;

        }
        else {

            r = mid - 1;
        }

    }
    return floor;
}