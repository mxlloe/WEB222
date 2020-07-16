/**
* WEB222 Assignment 02
*
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Please update the following with your information:
*
* Name: Sean Ramolete
* Student ID: 155074198
* Date: June 28 2020
*/

const users = require ('./users.json');

console.log(' Test \n');
function firstName() {
    // Get the first element from the users Array
    var firstUser = users[0];
    // TODO: fix this code to use dot notation to access the first name portion only
    return firstUser.name;
    }
    //If correctly added, this function should return the information for “Paige Bools”.
    console.log(firstName());
    console.log('______________________________________________________________________\n');
/*________________________________________________________________________________________________*/
/* Task 1 Write a function called getAge(birthdate, currentdate)
birthdate- The birthday of each of the users
currentdate- The date today.
The function will take these two parameters and return the age of the user*/
console.log(' Names and ages of each user\n');
var arr=[];
users.forEach(function(element){
    dateString = element.birthDate;
    age = " ";
    function getAge(dateString){
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
        {
            age--;
        }
        return age;   
              
    }
    console.log(element.name.first + " " + element.name.last + " " + getAge(dateString));
    // function add to calculate the avarage
    arr.push(getAge(dateString));
          
});
console.log('______________________________________________________________________\n');
/*________________________________________________________________________________________________*/
/*Task 2 - Using the getAge() method, write a function called getAvg() that returns the average
age of all the users in the array*/
//console.log(arr);
console.log('\n');
var sum = 0;
for( var i = 0; i < arr.length; i++ ){
    sum += parseFloat( arr[i], 150); 
}
var avg = sum/arr.length;

console.log( " The avg is: " + Math.round(avg));

console.log('______________________________________________________________________\n');
/*________________________________________________________________________________________________*/
//Task 3 - Add a new method to the “userUtils” Object called getManagers(). This method will
//return a new Array with all manager users. In other words, the new Array will include all user
//Objects where isManger is true.

const userUtils = [];
var name;
function getManagers(name){
    for(var i in users)
  {
    if (users[i].isManager)
    {
      // push method to create the user Utils array
      userUtils.push(users[i].name.first + ' ' + users[i].name.last);
    }
  }return userUtils;
}
console.log( " The managers are: ");
console.log(getManagers(name));

console.log('______________________________________________________________________\n');
/*________________________________________________________________________________________________*/
/*Task 4 - Write a function called getNameLength(firstname,lastname) that takes as input the
first name and last name of a user, concatenates the first name and last name (with a blank
space in between) and returns the length of this string.
getNameLength(“Sharmin”,”Ahmed”) returns 13*/

console.log (" Names and the length of each one");
console.log('\n');

users.forEach(function(name){
  console.log(name.name.first + " " + name.name.last + " " +(name.name.first + " " + name.name.last).length);
    
});

console.log('______________________________________________________________________\n');
/*________________________________________________________________________________________*/
/*Task 5 - Add a new method to the `userUtils` Object called `searchbyName()`. This method
will allow us to search for users in the `users` Array by their name:
userUtils.searchbyName('Paige');
This will return an Array of all user Objects which have a firstname or lastname that matches
'Paige'.
userUtils.searchbyName('Pa', true);
This will return an Array of all user Objects which have a firstname or lastname that begins with
the string 'Pa'. The second argument specifies that we want to do a fuzzy search (i.e., matches
don't have to be exact). An exact search is one where the name given must match exactly with
the firstname or lastname. A fuzzy search only has to begin with the name passed, and should
work for both lower and UPPER case comparisons (e.g., it should not matter, and should match
if the letters are the same regardless of case). Your function should return an Array with all user
Objects that match the name criteria.
name - the name or name portion to search for
fuzzy - if true, do a fuzzy search; otherwise do an exact search */

// for to access the list of names
for(var i in users)
  {
    if (users[i].name)
    {
      // push method to create the user Utils array
      userUtils.push(users[i].name.first + ' ' + users[i].name.last);

    }
  }
  const searchbyName = (arr, query) => {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  }

  // looking for a name in a list usersUtils.
  //if (userUtils.last != '\0' && userUtils.firstName != '\0'){
  console.log(" The name of the person is/are: ")
  console.log('\n'); // skip a line
  console.log(searchbyName(userUtils, 'paige')) ;
  
  //console.log("name not found");


  console.log('\n'); // skip a line

  // lookig for a parcial name in a list userUtils.
  console.log(searchbyName(userUtils, 'aux'));
  console.log('______________________________________________________________________\n');
  /*_________________________________________________________________________________________*/
  /*
  Task 6 - Add a new method to the ‘userUtils’ Object called “mostCommonCountry(users)”
that returns the country with the most number of users. The method should take as input the
users array and return the name of the country as well as the number of users in that country.
To solve this problem, you may first create an array of all the user countries and the number of
users in each of these countries. Now you can use this array to find the country with the
maximum number of users.
  */
  var count;
  const mostCommonCountry = [];
  
    for(var i in users)
  {
    if (users[i].country != '\0')
    {
      // push method to create the user Utils array
      mostCommonCountry.push(users[i].address.country);
    }
  }

    list = {},
    max = 0,
    result = [];

    mostCommonCountry.forEach(function (element) {
    list[element] = (list[element] || 0) + 1;
    if (list[element] > max) {
        max = list[element];
        result = [element];
        return;
    }
    if (list[element] == max) {
        result.push(element);
    }
});

console.log(' The most common country is: ' + (result) + ' = ' + max);

console.log('\n'); // skip a line

/*var count = {};
countrylist.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);*/



   
