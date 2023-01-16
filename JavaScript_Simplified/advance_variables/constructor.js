//traditional function for constructor

function createUser(name, age) {
  return { name: name, age: age };
}

const User1 = createUser("Zeta", "99");

//java-like constructor
function User(name, age) {
  this.name = name;
  this.age = age;
}

//java-like class, as same as function method
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName(){
    console.log(this.name)
  }
}

const User2 = new User("Zeta", "98");
console.log(User2); //it will give a User category
User2.printName()
