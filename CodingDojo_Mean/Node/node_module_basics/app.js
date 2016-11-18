// ///////import my_module.js INTO app.js////////
// var my_module = require('./my_module');
// my_module.greet();
// my_module.add(5,6);


var my_module = require('./my_module')(); // notice the extra invocation parenthesis!
console.log(my_module);
my_module.greet();
my_module.add(5,6)
