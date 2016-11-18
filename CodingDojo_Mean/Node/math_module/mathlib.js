module.exports = {
  add: function (num1, num2) {
    // return num1 + num2;
    console.log('The sum of:', num1 + num2);
  },
  multiply: function (num1, num2) {
    // return num1 * num2
    console.log('The product of:', num1 * num2);
  },
  square: function (num) {
    // return num*num
    console.log('Square of:', num*num);
  },
  random: function (num1, num2) {
    console.log(Math.floor(Math.random() * num2) + num1);
  }
}
