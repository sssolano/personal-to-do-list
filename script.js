let inputEl = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
let ulEl = document.getElementById("ul-el")
const deleteAllBtn = document.getElementById("delete-all-btn")
const renderEl = document.getElementById("renderMessageTask")

let myTodo = []
let myTasks = JSON.parse(localStorage.getItem("tasksDesc"))
if (myTasks === null) {
    myTasks = myTodo
} else if(myTasks != null) {
    myTodo = myTasks
}
show()

addBtn.addEventListener("click", function() {
    myTodo.push({"taskDescription": inputEl.value, "taskFinish": false})
    localStorage.setItem("tasksDesc", JSON.stringify(myTodo))
    inputEl.value = ""
    show()
})

function show() {
    // lo tenemos que tener vacio para poder agregar una nueva linea por cada loop que haga dentro del array
    let myList = ''
    let counter = 0
    for (let i = 0; i < myTodo.length; i++) { 
        if (myTodo[i].taskFinish === true) {
            myList += `<li><input type="checkbox" checked> <span class="cross-li">${myTodo[i].taskDescription}</span> </li>`
            counter++
        } else {
            myList += `<li><input type="checkbox"> <span>${myTodo[i].taskDescription}</span></li>`
        }
    }
    // aqui hacemos que agregamos cada valor nuevo 
    ulEl.innerHTML = myList
    let checkBoxEl = ulEl.querySelectorAll('input[type="checkbox"]')
    for (let i = 0; i < checkBoxEl.length; i++) {
        checkBoxEl[i].addEventListener("click", function() {    
            checkBoxEl[i].parentElement.querySelector('span').classList.toggle("cross-li")
            myTodo[i].taskFinish = !myTodo[i].taskFinish 
            localStorage.setItem("tasksDesc", JSON.stringify(myTodo))
            show()
        }) 
    }
    renderEl.innerHTML = `<p>${counter} of ${myTodo.length} completed</p>`
}

deleteAllBtn.addEventListener("click", function() {
    let notCompletedTasks = myTodo.filter( task => {
        if( task.taskFinish === false) {
            return true
        }
    })
    myTodo = notCompletedTasks
    localStorage.getItem("tasksDesc")
    localStorage.setItem("tasksDesc", JSON.stringify(myTodo))
    ulEl.innerHTML = ""
    show()
})