/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
everydayPack.changeName("Scott Zeta's Backpack")
console.log("Now this bag belongs to:", everydayPack.name)
console.log("Put something into the pocket");
everydayPack.fillOnePocket()
console.log("The pocketNum value:", everydayPack.pocketNum);