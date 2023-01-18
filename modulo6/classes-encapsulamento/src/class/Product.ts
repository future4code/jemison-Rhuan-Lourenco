export class Product{
    private id: string
    private name: string;
    private price: number;
    
    constructor (id: string, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }
    public getPrice(): number {
        return this.price;
    }
    public setName(newName: string): void {
        this.name = newName;
    }
    public setPrice(newPrice: number) {
        this.price = newPrice;
    }
}