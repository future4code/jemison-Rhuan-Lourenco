import express, { Request, Response } from 'express'
import cors from 'cors'
import { products } from './type'
import productsList from "./data.json"
import { isDataView } from 'util/types'
import { send } from 'process'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

//EXERCICIO 01

// app.get("/test", (req: Request, res: Response) => {

//     res.status(200).send('Servidor rodando na porta 3003!')

// })

//EXERCICIO 04

app.post("/test", (req:Request, res: Response) => {

    const {name, price} = req.body

    const lastId : number = productsList[productsList.length -1].id

    if(!name || !price) {
        res.status(400).send("Não foi possível adicionar o produto, passe os parametros corretamente.")
    } else {
        productsList.push({id:lastId+1, name, price})
        res.status(200).send(productsList)
    }

})

//EXERCICIO 05

app.get("/test", (req:Request, res:Response) => {
    res.status(200).send(productsList)
})


//EXERCICIO 06

app.patch("/test/:id", (req:Request, res:Response) => {

    const id = Number(req.params.id)
    const {price} = req.body

    const itemIndex = productsList.findIndex((current : products) => {
        return current.id === id
    })

    if(itemIndex != -1){
        productsList[itemIndex].price = price

        res.status(200).send(productsList)
    } else {
        res.status(404).send("Produto não encontrado")
    }

})

//EXERCICIO 07

app.delete("/test/:id", (req:Request, res:Response) => {

    const id = Number(req.params.id)

    const itemIndex = productsList.findIndex((current:products) => {
        return current.id === id
    })

    if(itemIndex != -1){
        productsList.splice(itemIndex, 1)
        res.status(200).send(productsList)
    } else {
        res.status(400).send("Produto não encontrado")
    }

})
