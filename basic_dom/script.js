window.addEventListener("resize", () => console.log("resized"));

//access elements
console.log(document.getElementById("div-id")); //print null if id does not exist

const IDdiv = document.getElementById("div-id");

IDdiv.style.color = "red";

let Classdiv = document.getElementsByClassName("div-class");
console.log(Classdiv);

const ClassDivArray = Array.from(Classdiv); //need to convert into a true array
ClassDivArray.forEach((e) => (e.style.color = "blue"));

//it will return an array(an collection) of elements with same class name

//different elements can have same class name

const btn = document.querySelector("[data-btn]");
console.log(btn);

//event listener, first parameter behaviour, second the function want to excute
btn.addEventListener("click", () => console.log("clicked"));
const clicked2 = () => console.log("clicked 2");
btn.addEventListener("click", clicked2);

//remove eventlistener(can not use anoymous)
btn.removeEventListener("click", clicked2);

const inputbox = document.querySelector('[data-text]')

inputbox.addEventListener('input', e => {
    console.log(e.target.value === '')
})