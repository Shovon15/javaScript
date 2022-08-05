/*
if run all files you need to remove specific lines or code .coz variable value can be multiple.


01.print all array elements 
02.add element in the last of the array
03. print all array items by index
04. Array forEach()
05. continue in a array
06. array operations-----
07. print all element in the array 10 times
08.summation of all odd number in a array
*/






// 01.print all array elements 
let arr =[12,13,20,43,50,33,65,23,12,66,87];
let i = 0;
let length = arr.length;

for( i ; i < length ;i++){
      let number = arr[i];
      // console.log(number);
   }

// 02. add element in the last of the array
const cars = ["Saab", "Volvo", "BMW","Honda"];
cars[4] ="Toyota";
// console.log(cars[3]);
// console.log(cars[cars.length-1]);


//03. print all array items by index---------

const carBrand = ["Toyota", "Volvo", "BMW","Honda"];
for(let i=0; i < carBrand.length; i++){  
   //  console.log(i);             //for loop
   //  console.log(carBrand[i]);
}


//04. Array forEach()---------------------------------------

const carName = ["Toyota", "Volvo", "BMW","Honda"];
function myFunction(value){   // forEach 
  //  console.log(value);
}
carName.forEach(myFunction);
//  console.log("Finished");


// 05. continue in a array------------
var marks = [ 13, 15, 14, 20, 18, 6, 10];
for(let i=0; i<marks.length; i++){
    if(marks[i] >=15){
        continue;
    }
   //  console.log(marks[i]);
};

// 06. array operations-------------------

let courses =["html", "css", "bootstrap", "tailwind", "javascript"];
// console.log(courses);                              //show all courses
// console.log(courses.length);                      //total length of array
// console.log(courses.indexOf("bootstrap"));       //specific index of an element
// console.log(courses[2]);                        //call element by index
// courses.push("react js")                       //push element in the last of array
// courses.unshift("basic");                     // push element in the first of array
// console.log(courses);                        // show all courses
// courses.shift("basic");                      // remove first element                         
// courses.pop();                              // remove last element 
// console.log(courses);

// 07. print all element in the array 10 times
var dogs = ['Bailey','Max','Charlie','Buddy','Daisy'];
let a=0,j=10;

for(a; a<j; a++){
  var k =0;
  for(k; k<dogs.length; k++){
   //  console.log(dogs[k]);
    }
//   console.log('*************');
}



//08.summation of all odd number in a array.......-------------------

function arraySum(number){
    let sum = 0;
        for (let i =0 ; i< number.length ; i++){
            const index = i;
            const element = number[index];
            sum = sum + element;
            // console.log(sum); // this just print every summation of the elements
        }
        // console.log(sum);
    }
    const arrayNumbers = [12, 15, 17, 18, 21, 34, 35];
    arraySum(arrayNumbers);