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
    if((i%3 === 0) && (i%2 !== 0)){
                 count++;
     }
 }
 console.log(count)

 // Q5 find count of  number 45 from given array
// [ 12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234 };
var count = 0;
var array = [  12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234];
for (var i = 0; i < array.length ; i++){
    if( array [i] === 45){
        count++;
    }

}
console.log( count)

// Q6 find number which addition target

var nums = [ 5,4,2,7 ]
var target = 9
for (i = 0; i<nums.length - 1; i++ ){
    for(var j =  i+1;  j<nums.length ; j++){
        if (nums[i]+ nums[j] === target ){
            console.log( nums[i] ,nums[j])
        }
    }
}

//Q7 find addition of every second number from 57689-346578
 
var firstDigit = 1
var secondDigit = 10
var add = 0 
 for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
     add = add + i
 }
 console.log (add ,"add here")

  var firstDigit = 57689
var secondDigit = 346578
var add = 0 
 for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
     add = add + i
 }
 console.log (add ,"add here")

