import Phone from "./Phone.js";

const phone1 = new Phone(
    "IPhone12",
    "Silver",
    "Scott Zeta",
    true
)

console.log(phone1)
console.log("On or Off?",phone1.power)
phone1.pressPower()
console.log("On or Off?",phone1.power)
console.log(phone1)
phone1.pressPower()
console.log("On or Off?",phone1.power)