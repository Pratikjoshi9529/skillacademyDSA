let arr = [1, 2, -3, 4];
let train = 0;
let max = 0;
for (x in arr) {
    let join = train + arr[x];
    let new1 = arr[x];
    train = Math.max(new1, join);
    max = Math.max(train, max);
}
console.log(max);