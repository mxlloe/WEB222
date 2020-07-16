/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Sean Lester Ramolete Student ID: 155074198 Date: June 12 2020
*
********************************************************************************/





/* 1a) Infinity has a positive infinite value greater than any number
Example:
console.log(1 / Infinity); output: 0 
*/

/* 1b) Undefined is a primitive value that automatically assigns to variables that got declared. 
Example:
var x;
console.log("x = ", x) output: "x = undefined"
*/

/* 1c) NaN means "Non-A-Number"
 Example: NaN == NaN; // false 
*/



/* 2a)
binary to decimal --> console.log(parseInt('1010', 2));
hex to decimal --> console.log(parseInt('AF', 16));
octal to decimal --> console.log(parseInt('713', 8));
*/


/* 
3a) var celsius = 35;
3bvar celsiusInF = (celsius*9)/5 + 32;
console.log(celsius + '°C is ' + celsiusInF + '°F');
var fahrenheit = 100;
var fahrenheitInC = ((fahrenheit - 32)*5)/9;
console.log(fahrenheit + '°F is ' + fahrenheitInC + '°C');
*/

/*
4a) 
function largerNum(a, b) {
    if ( a > b ) {
        return a;
    } 
    else 
    { 
       return b;
    }
  }
  console.log(largerNum(6,2));



4b) 
var greaterNum = function(a, b) {

    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(greaterNum(6,2));


4c

) unfinished
*/

/*
5a) 
function Evaluator() {


    var count = arguments.length;
    var total = 0;
    for(var i = 0; i < count; i++){
        total += arguments[i];
    }
    if(total >= 25)
    {
        return total / arguments.length;
    }

    else
    {
        return;
    }
}

console.log(Evaluator(20,20)); // returns total average
console.log(Evaluator(10,10)); // undefined since its < 25

5b) 
function Evaluator() {


    var count = arguments.length;
    var total = 0;
    for(var i = 0; i < count; i++){
        total += arguments[i];
    }
    if(total >= 25)
    {
        return total / arguments.length;
    }

    else
    {
        return;
    }
}

console.log(Evaluator(20,20) + ' Average >= 25: true');
console.log(Evaluator(10,10) + ' Average >= 25: false');
console.log(Evaluator(40,40) + ' Average >= 25: true'); 
*/

/* 
6a) 

function showMultiples(num, numMultiples)
{
    var total = 0;


}

*/

/*
7a) 
var add = (function () {
    var counter = 100;
    return function() 
    {
        counter += 100; return counter
    }
    

  } )
  ();
  
  console.log(add());
  console.log(add());  
  console.log(add());


*/


