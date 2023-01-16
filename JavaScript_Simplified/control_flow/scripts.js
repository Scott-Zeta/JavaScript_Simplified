//if statment with ternary operator
const tOrF = false;

//Almost only for true or false, I don't like it
tOrF ? console.log("true") : console.log("flase");

//can change into

const message = tOrF ? "true" : "false";
console.log(message);

//switch, in switch operator, it will run all code under the match cases, include other cases below.
//insert break if needed

const letter = "b";
//this will print b and c if letter is b, print only a if letter is a
switch (letter) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
  case "c":
    console.log("c");
  default:
    console.log("some letter else")
}
