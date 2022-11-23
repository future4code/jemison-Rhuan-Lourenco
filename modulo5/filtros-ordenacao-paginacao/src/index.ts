import express, { Request, Response } from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { getAllUsers, getAllUsersByFunctionalities, getAllUsersByPage, getAllUsersOrdered, getUsersByName, getUsersByType } from "./controllers/users";

const app = express()

app.use(express.json())

app.use(cors())

dotenv.config();


// app.get("/users", getAllUsers)

// EXERCICIO 01 - A
// app.get("/users", getUsersByName)

// EXERCICIO 01 - B
// app.get("/users/:type", getUsersByType)

// EXERCICIO 02
// app.get("/users", getAllUsersOrdered)

// EXERCICIO 03
// app.get("/users", getAllUsersByPage)

// EXERCICIO 04
app.get("/users/:type?", getAllUsersByFunctionalities)

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


