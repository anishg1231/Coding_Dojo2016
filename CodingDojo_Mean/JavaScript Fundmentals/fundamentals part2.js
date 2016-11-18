// Create a simple for loop that sums all the integers between x and y (inclusive).
// Have it console log the final sum.
function sum(x,y) { //function with names
  var sum = 0
  for (var i = x; i < y; i++) {
    sum += i
  }
  return sum
}
console.log(sum(5,2));

// Write a loop that will go through an array, find the minimum value, and then return it
function minimum(arr) { //function with names
  var min = arr[0]
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min
}
console.log(minimum[1,3,4,56]);

function findAvg() { //function with names
  var sum = 0
  var average = 0
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum/arr.length
}
console.log(findAvg[1,3,5,6,9]);

//#########################################
// Rewrite these 3 as anonymous functions assigned to variables.
//###########################################

var sum = function (x,y) {
  //delete name in function and put it in a variable
  var sum = 0
  for(var i = x; i < y;i++){
    sum += 1
  }
  return sum
}
console.log(sum(5,2));

var minimum = function (arr) {
  //delete name in function and put it in a variable
  var min = arr[0];
  for(var i = 1; i < arr.length;i++){
    if (arr[i] < min) {
      min = arr[i];
    }
    return min
  }
}
console.log(minimum[1,3,4,56]);

var findAvg = function (arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum/arr.length
}


var objects = {
  findAvg: function (arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum/arr.length
  }

  sum: function (x,y) {
    //delete name in function and put it in a variable
    var sum = 0
    for(var i = x; i < y;i++){
      sum += 1
    }
    return sum
  }

  minimum: function (arr) {
    //delete name in function and put it in a variable
    var min = arr[0];
    for(var i = 1; i < arr.length;i++){
      if (arr[i] < min) {
        min = arr[i];
      }
      return min
    }
  }

  var person = {
    name: "Anish",
    distance_traveled : 0
    say_name : function () {
      console.log(person.name);
    },
    say_something : function (phrase) {
      console.log(person.name + str);
    },
    walk: function () {
      person.distance_traveled += 3
      console.log(person.name + 'is walking');
    },
    run: function () {
      person.distance_traveled += 10
      console.log(person.name + 'is running');
    },
    crawl: function () {
      person.distance_traveled +=1
      console.log(person.name = 'is crawling');
    },
  }
  // say_name - should alert the object’s name property





  // say_something - have it accept a parameter. This function should then say for example “{{your name}} says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.



  // walk - have it alert for example “{{your name}} is walking” and increase distance_traveled by 3






  // run - have it alert for example “{{your name}} is running” and increase distance_traveled by 10





  // crawl - have it alert for example “{{your name}} is crawling” and increase distance_traveled by 1
