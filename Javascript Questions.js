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

//Q3 print the count from 20-40 which are even.

var count = 0
for (var i = 20; i <= 40; i++) {
    if (i % 2 === 0) {
        count++;
    }
}
console.log(count)

//Q4 print count of numbers d]from 147-254 which are divisiable by 3 and odd.
var count = 0;
for (var i=147; i<=254; i++){
    if(i%3===0){
        count++;
    }
}
console.log(count)
var count = 0
for ( var i =147; i <= 254; i++){
    if((i%2)==1){
            count++;
    }
}
console.log (count)