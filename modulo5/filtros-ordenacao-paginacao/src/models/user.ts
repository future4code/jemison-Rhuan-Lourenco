export class User {
    id: number
    name: string
    email: string
    type: string

    constructor(id: number, name: string, email: string, type: string){
        this.id = id;
        this.name = name;
        this.email = email;
        this.type = type;
    }
}