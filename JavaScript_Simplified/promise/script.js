const button = document.querySelector('button')

function addEventListenerPromise(element, method){
    return new Promise((resolve,reject) => {
        element.addEventListener(method, () => resolve())    
    })
}

addEventListenerPromise(button, "click").then(()=> {
    console.log("eventListener add successfully")
    console.log(button)
})