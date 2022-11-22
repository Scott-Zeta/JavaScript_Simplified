const letters = ["a", "b", "c", "d", "e"];

console.log(letters[parseInt(letters.length/2)])

const car = {
    Make: "Steel",
    Model: "MK4",
    isUsed: true,
    makeNoise: () => console.log("Beep~~!"),
    makeNoise2 (){
        console.log("No arrow Beep!")
    }
}

car.makeNoise()
car.makeNoise2()