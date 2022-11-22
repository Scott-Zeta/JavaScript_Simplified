const letters = ["a", "b", "c", "d", "e"];

console.log(letters[parseInt(letters.length / 2)]);

const car = {
  Make: "Steel",
  Model: "MK4",
  isUsed: true,
  makeNoise: () => console.log("Beep~~!"),
  makeNoise2() {
    console.log("No arrow Beep!");
  },
};

car.makeNoise();
car.makeNoise2();

const book = {
  title: "Eat my Shit",
  author: {
    name: "Scott Zeta",
    age: 99,
  },
};
