const a = [1, 2, 4, 5];

a.forEach((n) => console.log(n));

a.forEach((index, number, x, y, z) => console.log(index, number, x, y, z));

//map
let b = a.map((n) => n * 2);

b = a.map((n) => {
  return n + 1;
});
console.log(b);

//filter
const c = b.filter((n) => n % 2 == 0);
console.log(c);

//find return the first one found, or undefined
let n = c.find((n) => n > 2);
console.log(n);

//some almost the same, but return boolean, seek for if there is any
n = c.some((n) => n > 2);
console.log(n);

//every check every element
n = c.every((n) => n > 2);

//!!!!!reduce, return all elements in array into one
const sum = a.reduce((sum, n) => {
  return sum + n * 2; //1,2,4,5      ((((0*2 + 1)*2 + 2)*2 + 3)*2 + 4)*2 + 5 = 29
}, 0);
console.log(sum);
const sum2 = a.reduce((sum, n) => {
  return sum * 2 + n; //1,2,4,5     1*2+2*2+4*2+5*2 = 24
}, 0);
console.log(sum2);

const items = [{ price: 10 }, { price: 20 }, { price: 30 }, { price: 40 }];

let total = items.reduce((sum, n) => {
  return sum + n.price;
}, 0);
console.log("$",total);
