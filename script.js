inputEl = document.getElementById("input-field")
addBtn = document.getElementById("add-btn")
ulEl = document.getElementById("ul-el")

let myTodo = []

addBtn.addEventListener("click", function() {
    myTodo.push(inputEl.value)
    inputEl.value = ""
    show()
})

function show() {
    let myList = ''
    for (let i = 0; i < myTodo.length; i++) {
        myList += myTodo[i]
    }
    ulEl.innerHTML += `<li>${myList}</li>` 
}