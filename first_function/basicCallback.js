function printVariable(variable) {
  console.log(variable);
}

function callName(name, callback) {
  callback("Hello " + name);
}

callName("Zeta", printVariable);
