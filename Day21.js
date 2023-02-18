// find count of  number 45 from given array
//[ 12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234 };
// var count = 0;
// var array = [  12, 13, 45 , 67, 43 , 45, 76, 89,54, 23,7, 8797,243,23234];
// for (var i = 0; i < array.length ; i++){
//     if( array [i] === 45){
//         count++;
//     }

// }
// console.log( count)

// find number which addition target

var nums = [ 5,4,2,7 ]
var target = 9
for (i = 0; i<nums.length - 1; i++ ){
    for(var j =  i+1;  j<nums.length ; j++){
        if (nums[i]+ nums[j] === target ){
            console.log( nums[i] ,nums[j])
        }
    }
}

// find addition of every second number from 57689-346578
 
// var firstDigit = 1
// var secondDigit = 10
// var add = 0 
//  for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
//      add = add + i
//  }
//  console.log (add ,"add here")

//  var firstDigit = 57689
// var secondDigit = 346578
// var add = 0 
//  for ( var i = firstDigit + 1 ; i< secondDigit; i = i+2){
//      add = add + i
//  }
//  console.log (add ,"add here")
