
var number1 = 10;
var number2 = 20;
if (number2 <= number1) {
    console.log("Number 2 is greater than number 1");
}
else {
    console.log(" Number 2 is not greater than number 1 ..");
}

var userAage = 79;
if (userAage > 18) {
    console.log("user is applicable");
}
else if (userAage == 18) {
    console.log("user is applicable for learning lic...");
}
else {
    console.log("user is  not applicable ..");
}

// Q - check given Number is odd or even or display the result
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


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
    case 'watermelon':
        console.log('watermelon are $0.89 a pound.');
        break;
        case 'strawberry':
        console.log('strawberry are $0.60 a pound.');
        break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

const fruit = 'strawberry';
switch ( fruit) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
    case 'watermelon':
        console.log('watermelon are $0.89 a pound.');
        break;
        case 'strawberry':
        console.log('strawberry are $0.60 a pound.');
        break;
  default:
    console.log(`Sorry, we are out of ${fruit}.`);
}


var myName = "Vibha";
var city = "NaviMumbai";
console.log(`my name is ${ myName} & Im from ${city}` );



