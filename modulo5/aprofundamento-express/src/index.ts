import express, {Request, Response} from "express";
import cors from 'cors';
// @ts-ignore
import toDoList from "./data.json";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


// EXERCICIO 1

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓")
})


// EXERCICIO 2

export type toDo = {
    userId : number,
    id : number,
    title : string,
    completed : boolean
}

// EXERCICIO 3

// ok

// EXERCICIO 4

app.get("/todos", (req : Request, res : Response) => {
    const completedTasks : toDo[] = toDoList.filter((current : toDo) => {
        return current.completed
    })

    res.status(200).send(completedTasks)
})

// EXERCICIO 5

app.post("/todos", (req : Request, res : Response) => {
        
    const {userId, title, completed} = req.body

    if(!userId  || !title || completed === undefined) {
        res.status(400).send('Não foi possível adicionar tarefa, passe os parametros corretamente.')
    }

    const userSelectById = toDoList.find((current : toDo) => {
        return current.userId === userId
    })

    const lastId : number = toDoList[toDoList.length -1].id

    if(!userSelectById) {
        res.status(404).send('Usuário não encontrado')
    } else {
        toDoList.push({userId, id:lastId+1, title, completed})
        res.status(200).send(toDoList)
    }

})

// EXERCICIO 6

app.patch("/todos/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const itemIndex = toDoList.findIndex((current : toDo) => {
        return current.id === id
    })

    if(itemIndex != -1){

        toDoList[itemIndex].completed = !toDoList[itemIndex].completed

        res.status(200).send(toDoList)
    } else {
        res.status(404).send('Tarefa não encontrada')
    }

})

// EXERCICIO 7

app.delete("/todos/:id", (req: Request, res: Response) => {

    const id = Number(req.params.id)

    const itemIndex = toDoList.findIndex((current : toDo) => {
        return current.id === id
    })

    if(itemIndex != -1){
        toDoList.splice(itemIndex, 1)
        res.status(200).send(toDoList)
    } else {
        res.status(404).send('Tarefa não encontrada')
    }

})

// EXERCICIO 8

app.get("/todos/:userId", (req: Request, res: Response) => {

    const userId = Number(req.params.userId)

    const userExist = toDoList.find((current : toDo) => {
        return current.userId === userId
    })

    if(userExist) {
        const userToDos = toDoList.filter((current : toDo) => {
            return current.userId === userId
        })
        res.status(200).send(userToDos)
    } else {
        res.status(404).send('Usuário não encontrado.')
    }

})

// EXERCICIO 10

app.get("/todos/:userId", (req: Request, res: Response) => {

    const userId = Number(req.params.userId)

    const userExist = toDoList.find((current : toDo) => {
        return current.userId === userId
    })

    if(userExist) {

        const others : toDo[] = []
        const selectedUser : toDo[] = []

        toDoList.forEach((current : toDo) => {
            if(current.userId === userId) {
                selectedUser.push(current)
            } else {
                others.push(current)
            }
        })

        const response = {todos : {selectedUser: selectedUser, others: others}}

        res.status(200).send(response)
    } else {
        res.status(404).send('Usuário não encontrado.')
    }

})