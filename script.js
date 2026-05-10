let inputEl = document.getElementById("input-field")
const addBtn = document.getElementById("add-btn")
let ulEl = document.getElementById("ul-el")
const deleteAllBtn = document.getElementById("delete-all-btn")

let myTodo = []

addBtn.addEventListener("click", function() {
    myTodo.push({"taskDescription": inputEl.value, "taskFinish": false})
    console.log(myTodo)
    inputEl.value = ""
    show()
})

function show() {
    // lo tenemos que tener vacio para poder agregar una nueva linea por cada loop que haga dentro del array
    let myList = ''
    for (let i = 0; i < myTodo.length; i++) {
        myList += `<li><input type="checkbox"> ${myTodo[i].taskDescription}</li>`
    }
    // aqui hacemos que agregamos cada valor nuevo 
    ulEl.innerHTML = myList
    let checkBoxEl = ulEl.querySelectorAll('input[type="checkbox"]')
    for (let i = 0; i < checkBoxEl.length; i++) {
        checkBoxEl[i].addEventListener("click", function() {
            checkBoxEl[i].parentElement.classList.toggle("cross-li")
        }) 
    }
}

deleteAllBtn.addEventListener("click", function() {
    myTodo = []
    ulEl.innerHTML = ""
})
