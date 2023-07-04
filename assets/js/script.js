document.addEventListener('DOMContentLoaded', () => (
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        buildTodo(e.target.new_todo.value)
    } )
))

function buildTodo(todo){
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = ' x '
    p.textContent = `${todo} `
    p.appendChild(btn)
    console.log(p)
    // document.querySelector('#btn').appendChild(btn)
    document.querySelector('#todo').appendChild(p)
}

function handleDelete(e) {
    e.target.parentNode.remove()
}

//Create an alert
document.querySelector('#alert').addEventListener
('click', alertMe )

function alertMe() {
    return alert('Hi I was Clicked')
}

// log something
document.querySelector('#log').addEventListener
('click', logMe)

function logMe() {
    console.log ('I\'ve been logged')
}

//Will delete task
function willHandleDelete(e){
    e.target.parentNode.remove()
}


//Grabs btn and deletes Parent Node

function addEventListenerToDeleteButtons() {
    let buttons = document.getElementsByClassName
    ('delete_btn')
   for( let btn of buttons){
    btn.addEventListener('click', willHandleDelete)
   }
    
}
addEventListenerToDeleteButtons(  )