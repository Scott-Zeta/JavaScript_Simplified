function print(a){
    let c = 3
    return function func(b){
        console.log(a)
        console.log(b)
        console.log(c)
    }
}
//fantasitc like a shit. 
let x = print(1) //=>a
x(2) //=>b
x(4) //=>b

x = print(0) //=>a
x(2)  //=>b
x(4)  //=>b

print(1)(7) //so, you can access inside closure by this? interesting