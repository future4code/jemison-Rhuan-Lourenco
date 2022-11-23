import { Request, Response } from "express"
import {selectAllUsers, selectAllUsersByFunctionalities, selectAllUsersByPage, selectAllUsersOrdered, selectUserByName, selectUserByType} from "../repositories/users"


export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No users found")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

// EXERCICIO 01 - A
export const getUsersByName = async(req: Request, res: Response): Promise<void> => {
   try{
      const name = req.query.name as string
      const users = await selectUserByName(name)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// EXERCICIO 01 - B
export const getUsersByType = async(req: Request, res: Response): Promise<void> => {
   try{
      const type = req.params.type as string
      const users = await selectUserByType(type)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// EXERCICIO 02

export const getAllUsersOrdered = async(req: Request,res: Response): Promise<void> =>{
   try {
      const orderByColumn = (req.query.orderBy || 'email') as string
      const users = await selectAllUsersOrdered(orderByColumn)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// EXERCICIO 03
export const getAllUsersByPage = async(req: Request, res: Response): Promise<void> => {
   try{
      const page = Number(req.query.page)
      const users = await selectAllUsersByPage(page)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

// EXERCICIO 04
export const getAllUsersByFunctionalities = async(req: Request, res: Response): Promise<void> => {
   try{
      const name = req.query.name as string
      const type = req.params.type as string
      const orderByColumn = (req.query.orderBy || 'name') as string
      const page = Number(req.query.page)
      const users = await selectAllUsersByFunctionalities(name, type, orderByColumn, page)

      if(!users.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}