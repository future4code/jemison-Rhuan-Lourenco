import express, { Request, Response} from "express"
import cors from 'cors'
import {users} from './data'
import { User } from "./types"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 01

// app.get('/users', (req: Request, res: Response) => {
//     res.status(200).send(users)

// })

//a. GET
//b. /users

// EXERCICIO 02

app.get('/users/:type', (req: Request, res: Response) => {

    let errorCode = 400
    try{

        const userType = req.params.type.toUpperCase()

        const filterUserType = users.filter((current) => {
            return current.type === userType
        })

        if(filterUserType.length === 0) {
            errorCode = 404
            throw new Error("Type de usuário não encontrado no banco")
        }

        res.status(200).send(filterUserType)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

//a. Passei pelo path parameters, pois ele é obrigatório para que o endpoint funcione corretamente.
//b. Ok.


// EXERCICIO 03

app.get('/users', (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const userName = req.query.name as string

        if(!userName){
            errorCode = 401
            throw new Error('Falta passar o nome como parametro')
        }

        const getUser = users.filter((current) => {
            return current.name.toUpperCase() === userName.toUpperCase()
        })

        if(getUser.length === 0) {
            errorCode = 404
            throw new Error('Usuário não encontrado.')
        }

        res.status(200).send(getUser)
    } catch(error : any) {
        res.status(errorCode).send(error.message)
    }

})

// a. Query parameters
// b. Ok.

// EXERCICIO 04

app.post('/users/create', (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const {name, email, type, age} = req.body

        if(!name || !email || !type || !age){
            errorCode = 422
            throw new Error("Falta passar parametros corretamente(name, email, type, age)")
        }

        if(type.toUpperCase() !== "ADMIN" && type.toUpperCase() !== "NORMAL") {
            errorCode = 402
            throw new Error("Insira um tipo de usuário válido(ADMIN ou NORMAL)")
        }

        const lastId : number = users[users.length -1].id

        const newUser : User ={
            id: lastId+1,
            name: name,
            email: email,
            type: type.toUpperCase(),
            age: age
        }

        users.push(newUser)

        res.status(200).send(users)
    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }

})

//a. Nada mudou.
//b. Não, o método PUT normalmente é utilizado para fazermos alterações em um objeto inteiro.

// EXERCICIO 05

app.put('/users/edituser', (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const userId : number = users.length

        for(let user of users){
            if(userId === user.id) {
                user.name = user.name+"-ALTERADO"
            }
        }

        res.status(200).send(users)
    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }

})

// EXERCICIO 06

app.patch('/users/edit', (req: Request, res: Response) => {

    let errorCode = 400

    try {

        const userId : number = users.length

        for(let user of users){
            if(userId === user.id) {
                user.name = user.name+" -REALTERADO"
            }
        }

        res.status(200).send(users)
    } catch (error : any) {
        res.status(errorCode).send(error.message)
    }

})

// EXERCICIO 07

app.delete('/users/:id', (req: Request, res: Response) => {

    let errorCode = 400
    try{

        const userId = Number(req.params.id)

        const findUserId = users.findIndex((current) => {
            return current.id === userId
        })

        if(findUserId != -1) {
            users.splice(findUserId, 1)
        }

        if(findUserId === -1){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send(users)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})
