console.log("test")

document.addEventListener("click",(e) =>{
    const img = new Image()
    img.src = "./image/diediedie.svg"
    const x = e.clientX
    const y = e.clientY
    const degree = Math.floor(Math.random()*360)
    img.style.position = "absolute"
    img.style.top = y-50 + "px"
    img.style.left = x-100 + "px"
    img.style.transform = "rotate(" + degree + "deg)"
    console.log(x,y)
    document.body.appendChild(img)
})