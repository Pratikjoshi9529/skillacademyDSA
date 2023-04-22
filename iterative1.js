//Pattern 1
function printPattern(n) {
    // s = "";
    for (let i = 0; i <= n; i++) {
        s = "";
        for (let j = 0; j <= i; j++) {
            s = s + "*";
        }
        // s = s + "\n";
        console.log(s);
    }
    // console.log(s);
}
printPattern(4);


//Pattern 2

// pattern 1
let n = 4;
for (let i = n; i >= 0; i--) {
    s = "";
    for (let j = 1; j <= i; j++) {
        s = s + "*";
    }
    console.log(s);
}
console.log("/////////////////////////////////////////////");
// Pattern 2
n = 4;
for (let i = 0; i <= n; i++) {
    s = "";
    for (let j = 0; j < i; j++) {
        s = s + "*";
    }
    // s = s + "\n";
    console.log(s);
}
console.log("/////////////////////////////////////////////");
// pattern 3
n = 4;
for (let i = 0; i <= n; i++) {
    let stars = i;
    let spaces = n - i;
    let line = "";
    for (j = 0; j <= stars; j++) line += "_";
    for (j = 0; j <= spaces; j++) line += "*";
    console.log(line);
}
console.log("/////////////////////////////////////////////");
// pattern 4
n = 4;
for (let i = 0; i <= n; i++) {
    let stars = n - i;
    let spaces = i;
    let line = "";
    for (j = 0; j <= stars; j++) line += "_";
    for (j = 0; j <= spaces; j++) line += "*";
    console.log(line);
}
console.log("/////////////////////////////////////////////");
    // pattern 4
let n = 5;
let stars = 1;
let spaces = Math.floor(n / 2);
for (let i = 1; i <= n; i++) {
    let line = "";
    for (j = 1; j <= spaces; j++) line += "_";
    for (j = 1; j <= stars; j++) line += "*";

    console.log(line);
    //  console.log(spaces,stars);
    if (i <= n / 2) {
        stars = stars + 2;
        spaces = spaces - 1;
    } else {
        stars = stars - 2;
        spaces = spaces + 1;
    }

}