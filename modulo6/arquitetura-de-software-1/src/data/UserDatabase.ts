import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/user";

export class UserDatabase extends BaseDatabase {
    get(): user[] | PromiseLike<user[]> {
        throw new Error("Method not implemented.");
    }
    insertUser = async (user: user): Promise<void> => {
        try {
            await UserDatabase.connection
                .insert({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                })
                .into("User_Arq");
        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    findUser = async (): Promise<user[]> => {

        try {

            const users: user[] = [];

            const result = await UserDatabase.connection()
                .select("*")
                .from("User_Arq");

            for (let user of result) {
                users.push(user);
            }

            return users;

        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    deleteUser = async (id: string): Promise<void> => {
        try {
          await UserDatabase.connection()
            .where({ id })
                    .from("User_Arq")
                    .delete()
            
        } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
        }
      };
}
