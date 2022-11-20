function printVariable(variable) {
  console.log(variable);
}

function callName(name, callback) {
  callback("Hello " + name);
}

callName("Zeta", printVariable);
//printVariable is a function and also a variable


//you can also write a call back function without a variable name
callName("Delta", function (variable) {
  console.log(variable);
});

// callName(   First String parameter: "Delta", 
//        Second function parameter: function (variable) {console.log(variable);}          
//          );          (call "callName" end.)
//quit messy, especially with arrow function