let inputEl = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
let ulEl = document.getElementById("ul-el")
const deleteAllBtn = document.getElementById("delete-all-btn")
const updateBtn = document.getElementById("update-btn")

let myTodo = []
const myProto = {
    "id": "text"
}

// Varias cosas por definir que otra funcion vamos hacer
// Si habilitar poder editar la tarea
// Editar el ESTADO de la tarea


addBtn.addEventListener("click", function() {
    myTodo.push(inputEl.value)
    inputEl.value = ""
    show()
})

function show() {
    // lo tenemos que tener vacio para poder agregar una nueva linea por cada loop que haga dentro del array
    let myList = ''
    for (let i = 0; i < myTodo.length; i++) {
        myList = `<li>${myTodo[i]}</li>`
    }
    // aqui hacemos que agregamos cada valor nuevo 
    ulEl.innerHTML += myList
}

deleteAllBtn.addEventListener("click", function() {
    myTodo = ""
    ulEl.innerHTML = ""
})

updateBtn.addEventListener("click", function() {

})

