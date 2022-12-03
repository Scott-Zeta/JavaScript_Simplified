//1. select all elements, initial them as varibales in the code;
//use # to select id, . to select class name
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

//2. add new element when submit
form.addEventListener('submit', e =>{
    e.preventDefault()
    //3. need to create a new element to the list
    const item = document.createElement('div')
    item.innerText = input.value
    item.className = 'list-item'
    console.log(item.outerHTML)
    //looks like: <div class="list-item">xxx</div>

    //4. the item shows in the list need a event listener for click then remove it
    item.addEventListener('click', () =>{
        list.removeChild(item)
    })
    //5. add the item to the list(render), and reset the input box
    list.appendChild(item)
    input.value = ""
})