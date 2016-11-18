////NODE MODULE ALLOWS YOU TO USE THE MODULE.EXPORTS OBJECTS OF ANOTHER FILE.
// module.exports = {
//   greet: function () {
//     console.log('We are now using a module!');
//   },
//   add: function (num1, num2) {
//     console.log('The sum is:', num1 + num2);
//   }
// }

///RETURN A FUNCTION THAT RETURNS AN OBJECT///

module.exports = function () {
  return{
    greet: function () {
      console.log('We are now using a module!');
    },
    add: function (num1, num2) {
      console.log('The sum is:', num1 + num2);
    }
  }
}
