// Q1 - check given Number is odd or even or display the result
var usarNumber = 89;
if ((usarNumber % 2) == 0) {
    console.log("number is even");
}
else {
    console.log("number is odd   ..");
}

var Statement = 88;
if ((Statement % 2) == 0) {
    console.log(" provided number is even");
}
else {
    console.log(" provided number is odd   ..");
}

// Q2 print the number from 20-40 which are even.
for (var i = 20; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

//q 5 print the count from 20-40 which are even.

var count = 0
for (var i = 20; i <= 40; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log(count)