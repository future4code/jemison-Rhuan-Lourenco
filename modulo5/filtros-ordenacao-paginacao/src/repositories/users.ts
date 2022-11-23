import { connection } from "../data/connection"
import { User } from "../models/User"

export async function selectAllUsers():Promise<User[]> {
    const result: Array<User[]> = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio;
    `)

    return result[0]
}

// EXERCICIO 01 - A
export async function selectUserByName(name: string): Promise<User[]> {
    
    const result: Array<User[]> = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio 
        WHERE name = "${name}";
    `)
    
    return result[0]
}

// EXERCICIO 01 - B
export async function selectUserByType(type: string): Promise<User[]> {

    const result: Array<User[]> = await connection.raw(`
        SELECT id, name, email, type
        FROM aula48_exercicio 
        WHERE type = "${type}";
    `)
    
    return result[0]
}

// EXERCICIO 02
export async function selectAllUsersOrdered(column: string):Promise<User[]> {
    const result: Array<User[]> = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ORDER BY ${column} ASC
    `)

    return result[0]
}

// EXERCICIO 03
export async function selectAllUsersByPage(page: number):Promise<User[]> {
    const offset = 5*(page-1)

    const result: Array<User[]> = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       LIMIT 5
       OFFSET ${offset};
    `)

    return result[0]
}

// EXERCICIO 04
export async function selectAllUsersByFunctionalities(name: string,type: string,column: string, page: number):Promise<User[]> {
    const offset = 5*(page-1)
    let where = ''
    if(name && type){
        where = `WHERE name = "${name}" AND type = "${type}"`
    } else if(name){
        where = `WHERE name = "${name}"`
    } else if(type){
        where = `WHERE type = "${type}"`
    }

    const result: Array<User[]> = await connection.raw(`
       SELECT id, name, email, type
       FROM aula48_exercicio
       ${where}
       ORDER BY ${column} DESC
       LIMIT 5
       OFFSET ${offset};
    `)

    return result[0]
}
