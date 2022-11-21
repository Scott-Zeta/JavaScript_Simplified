//traditional function

function sum(a, b) {
  console.log(a + b);
  //it will be contatcted if one is a number one is a string 1 + "4" = "14"
}

sum(1, "4");

//return function
function callName(name) {
  return "Hello " + name;
}

console.log(callName("Zeta"));

//an arrow function

let printName = (name) => {
  console.log(name);
};

printName("Zeta");

//one line arrow function with shortcut

let printHi = name => "Hi " + name

console.log(printHi("Kell"))
