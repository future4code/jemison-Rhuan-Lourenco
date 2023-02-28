import { performPurchase } from "../src/function/funcUserBalance"

describe('Teste para função do extrato do usuario', () =>{
    const user1 = {
        name: "Rhuan",
        balance: 1500
    }
    test("teste maior valor da compra", ()=>{
        return expect(performPurchase(user1, 200)).toEqual({"balance": 1300, "name": "Rhuan"})
    })

    test("teste igual valor da compra", ()=>{
        return expect(performPurchase(user1, 1500)).toEqual({"balance": 0, "name": "Rhuan"})
    })

    test("teste menor valor da compra", ()=>{
        return expect(performPurchase(user1, 1700)).not.toEqual({ balance: 0})
    })

})