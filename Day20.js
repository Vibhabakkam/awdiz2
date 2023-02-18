for ( var i = 1; i <=10; i++ ){
    console.log(i)
}

// // 1st intteration:
// // step 1 - starting at 1
// // step 2 - checking ending; i<=10; 1<=10; true
// // step 3 - code executed 
// // step 4 - adding 1 into 1 it will be 2 ; ( i++)
// // result -1

// // 2nd intteration:
// // step 1 - starting at 2
// // step 2 - checking ending; i<=10; 2<=10; true
// // step 3 - code executed 
// // step 4 - adding 1 into 2it will be 3; ( i++)
// // result -2

// // 3rd intteration:
// // step 1 - starting at 3
// // step 2 - checking ending; i<=10; 3<=10; true
// // step 3 - code executed 
// // step 4 - adding 1 into 3  it will be 4 ; ( i++)
// // result -3

// // 9th intteration:
// // step 1 - starting at 9
// // step 2 - checking ending; i<=10; 9<=10; true
// // step 3 - code executed 
// // step 4 - adding 1 into 9 it will be 10 ; ( i++)
// // result -9

// // 10th intteration:
// // step 1 - starting at 10
// // step 2 - checking ending; i<=10; 10<=10; true
// // step 3 - code executed 
// // step 4 - adding 1 into 10 it will be 11 ; ( i++)
// // result -10

// // 11th intteration:
// // step 1 - starting at 11
// // step 2 - checking ending; i<=10; 11<=10; false
// // step 3 - for loop stop



for ( var i= 10; i > 1; i--){
    console.log(i);
}
//1st iteration
// step 1 - i = 10 ;
// step 2 - checking ending ; i>1, 10>1 true
// step 3 - code executed 



// q 4 print the number from 20-40 which are even.
for ( var i =20; i <= 40; i++){
    if(i%2===0){
            console.log(i)
    }
}

//q 5 print the count from 20-40 which are even.

 var count = 0
for ( var i =20; i <= 40; i++){
     if(i%2===0){
             count++;
    }
}
 console.log (count)



//Q 6 print count of numbers d]from 147-254 which are divisiable by 3 and odd.
var count = 0;
 for (var i=147; i<=254; i++){
    if((i%3 === 0) && (i%2 !== 0)){
                 count++;
     }
 }
 console.log(count)