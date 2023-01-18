export class User {
    private id: string
    private email: string;
    private password: number;

    constructor(id: string, email: string, password: number) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    public getEmail(): string {
        return this.email;
    }
    public getPassword(): number {
        return this.password;
    }
    public setEmail(newEmail: string): void {
        this.email = newEmail;
    }
    public setPassword(newPassword: number) {
        this.password = newPassword;
    }
}