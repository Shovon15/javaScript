
/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// 01. uppercase and lowercase.
02. search string----------
03. index0f startswith endsWith-----------------
04. split---------------------------------------
05. slice , substring------------ 
06. join array elements-----------------------
07.  math.abs--------------
08. Math.round, ceil ,random, floor-------------------------
09. temp----------------------------
10. max min--------------------------

*/

var a=2; 
var b=3; 
if(a < b){
    // console.log('Hello');
}







// 01. uppercase and lowercase. 

const userName = 'blackPanther';
const userInput = 'blackPanther';
if(userName.toLowerCase === userInput.toLowerCase){
    // console.log('valid');
} else{
    // console.log('invalid');
}


// 02. search string----------

const lyrics = 'tumi bondhu kala pakhi ami jano ki?';
const searchString = 'paKHi';
// const search = lyrics.includes('kala pakhi'); //case sensitive

const search = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(search);


// 03. index0f startswith endsWith-----------------

// console.log(lyrics.indexOf('kala'));

// console.log(lyrics.startsWith('tumi'));
// console.log(lyrics.endsWith('tumi'));


// 04. split---------------------------------------
// console.log(lyrics);
const parts = lyrics.split(' ');
const partsEmpty = lyrics.split('');

// console.log(parts);
// console.log(partsEmpty);

// 05. slice , substring------------ 

const partial = lyrics.slice(5, 12);
const partial2 = lyrics.substring(5, 12);

// console.log(partial);
// console.log(partial2);


// 06. join array elements-----------------------
const lines =['Tumi bondhu kala pakhi', 
 'ami jano ki?', 
 'bosonto kale tomay bolte parini'
]
const newString = lines.join(':');
// console.log(newString);


// 07.  math.abs--------------

const num1 = 25;
const num2 = 45;
const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap< 5){
    // console.log('can be friend');
} else{
    // console.log('stay aparat');
}

// ----------------------

const numbers = -78; 
const answer = Math.abs(numbers); 
// console.log(answer);




// 08. Math.round, ceil ,random, floor-------------------------

const number = 2.4569;
const fullNum = Math.round(number);
// console.log(fullNum);

// console.log(Math.ceil(2.44));
// console.log(Math.floor(12.96));
// console.log(Math.ceil(12.96));
for(let i=1 ; i<=6; i++){

    // console.log(Math.round(Math.random()*6));
}


// 09. temp----------------------------

let first = 5;
let second = 7;

// // approach 01
const temp = first;
first = second;
second = temp;
// console.log(first, second);

[first, second] = [second, first];
// console.log(first, second);


// 10. max min--------------------------

function max(number1, number2, number3){
    const getMax = Math.max(number1, number2, number3);
    return getMax;
}
// console.log(max(12, 15, 10));

var a = 5;
var b = 8; 
var c = 4;
var d = 6; 
var highest =Math.max(a, b, c, d);
//   console.log(highest);

// ---------------------------------
function add(a, b){
     return a + b;
    }
   console.log(add(12,14));