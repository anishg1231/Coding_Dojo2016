//array variable

var array = [3,5,'Dojo','rocks', 'Michael', 'Sensei'];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//PUSH THE VALUE
var array = [3,5,'Dojo','rocks', 'Michael', 'Sensei'];
array.push(100);

//PUSH ANOTHER ARRAY TO ARRAY X
x.push(['hello','world', 'javascript is fun']);

// PRINT ALL SUM OF NUMBERS FROM 1-500
function SUM() {
  var sum = 0;
  for (var i = 0; i < 501; i++) {
    sum += i;
  }
  console.log(sum);

// FIND THE MIN VALUE
var array = [1,5,90,25,-3,0];
var min = array[0];
for (var i = 1; i < array.length; i++) {
  if (array[i] < min) {
    min = array[i];
  }
}
console.log(min);

// FIND THE AVERAGE VALUE OF ARRAY

var sum = arr[0];
for (var i = 1; i < array.length; i++) {
  sum += array[i];
}
console.log(sum/array.length);

// Iterate through object
var new_ninja = {
  name: 'Jessica',
  profession: 'coder',
  favorite_language: 'JavaScript',
  dojo: 'Dallas'
};

for (var key in new_ninja){
  console.log(key + " : " + new_ninja[key]);
}
