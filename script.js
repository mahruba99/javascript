     //Assignment//
//Problem 1: Write a function to calculate the area of a triangle.
//Answer:
function area(base, height){
    const areaTri = (base*height)/2;
    console.log(areaTri);
}
area(10, 5);

//Problem 2: Write a function to convert degrees to radians.
//Ans:
function convert(degree, pi){
    let radian = degree * (pi / 180);
    console.log(radian);
}
convert(30, 3.1416);

//Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
//Ans:
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= number; i++) {
        factorial = factorial * i;
      }
      return factorial;
    }
  }
  
  console.log(calculateFactorial(5));

//Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
//Ans:
function isPrime(number) {
    if(number === 2 || number < 2){
        return true;
    }else{
        return false;
    }
    
  }
  console.log(isPrime(11));

//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
//Ans:
function mergeArrays(arr1, arr2,) {
    return [...arr1, ...arr2,];
}

const mergedArray = mergeArrays([23, 45, 78], [45, 67, 89]);
console.log(mergedArray);


//Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
//Ans:
function isLeapYear(year){
    if((year % 400 === 0) || (year % 4 === 0) && (year % 100 !== 0)){
        return(year + " is a leap year");

    }else{
        return(year + " is not a leap year");

    }
}
   let leapYear = isLeapYear(2016);
   console.log(leapYear);

//Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
//Ans:
function removeDuplicates(array){
    const newArray = [...new Set(array)];
    return newArray;
}
    const array = ["Apple", "mango", "mango", "orange", "banana", "banana"];
    const resultArray = removeDuplicates(array);
    console.log(resultArray);

//Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
//Ans:
function convertToCelsius (farenhite){
    const newTemp = (farenhite - 32) * 5 / 9;
    return newTemp;

}
const farenhite = 68;
const celcius = convertToCelsius (farenhite) ;
console.log(celcius);


//Problem 9: Write a function to find the maximum of five numbers.
//Ans:
function maxNumber(a, b, c, d, f){
    if(a > b && a > c && a > d && a > f){
        console.log(a);
    }
}
maxNumber(5, 4, 3, 2, 1);

//Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
//Ans:
function evenOdd(inputString) {
        
    const length = inputString.length;
  
    if (length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  
 
  const inputStr1 = 'JavaScript';
  const inputStr2 = 'Hello';

  const output1 = evenOdd(inputStr1);
  const output2 = evenOdd(inputStr2);

  console.log(`Input: '${inputStr1}' Output: ${output1}`);
  console.log(`Input: '${inputStr2}' Output: ${output2}`);

  //1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

//The if-else statement allows the programmer to do exactly that with their code. A condition check is done. If it is true, control goes to one block of code, and if it isn’t, then control goes to a different block of code defined in else. 
//f-else statement uses multiple statement for multiple choices..Either if statement will be executed or else statement is executed.


//In the switch statement, we compare the condition value with multiple cases. When there is a match with any one of the cases, the block of code corresponding with that case is executed.
//switch statement uses single expression for multiple choices.switch statement execute one case after another till a break statement is appeared or the end of switch statement is reached

//3. Explain the difference between var, let, and const when declaring variables in JavaScript.
//Variables declared with var are in the function scope.It can be updated or re-declared.
//Can be accessed without initialization as its default value is “undefined”.


//Variables declared as let are in the block scope.It can only be updated and can't be re-declared.Cannot be accessed without initialization, leading to ‘referenceError’.


//Variables declared as const are in the block scope.It can't be updated or re-declared.Cannot be accessed without initialization, as it cannot be declared without initialization in the first place.


//5. What is the difference between "null" and "undefined" in JavaScript?

//Null is basically an assignment value given to a variable. The variable which has been assigned as null contains no value.When we assign null as a value to any variable, it means that it is empty or blank. It is to show that the variable has no value. Also, null is an object in JavaScript.

//Undefined means "not defined". So we declare a variable but do not assign a value to it, the variable becomes undefined.Unlike null, the value of an undefined variable is set by JavaScript as undefined. The variable gets created at the run-time. When we do not pass an argument for a function parameter, the default value is taken as undefined. 


//. What is JavaScript, and what is its primary purpose in web development?

//JavaScript, often simply referred to as JS, is more than just a programming language. It is the backbone of modern web development, enabling developers to create interactive, dynamic, and complex websites. In simpler terms, if a website is a car, then HTML would be the car's frame, CSS its paint job, and JavaScript its engine.

//The primary purpose of JavaScript is to provide an interface between a website and its users. It enables developers to write code that can respond to user events, such as clicking a button or entering data into a form. This makes websites more engaging, dynamic, and interactive. It also allows developers to add features like animations, games, and other interactive elements.JavaScript also helps with front-end development,Another important use of JavaScript is for back-end development.The purpose of JavaScript is to provide an interface between a website and its users, improve the look and feel of a website, facilitate back-end development, and create powerful mobile apps. JavaScript developers can use it to create powerful web applications with minimal effort. 

