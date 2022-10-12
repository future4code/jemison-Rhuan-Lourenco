// EXERCICIO 3

const toDoList = []

const toDo = process.argv[2]

function addToDoList(newTask) {
    toDoList.push(newTask)
    return (
        console.log("%cTarefa adicionada com sucesso!", "background: #000; color: #FFF"),
        console.log(toDoList)
    )
}

addToDoList(toDo)