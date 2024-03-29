import { validateCharacter } from "../src/funcs/validateCharacter";


describe.skip("Teste Character",()=>{
    test("Teste 1: Crie um teste que verifique o comportamento da função com um personagem com o nome vazio ",()=>{
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 500,
            defense: 300,
          })

          expect(result).toBe(false);
    })

    test("Teste 2: verifique o comportamento da função com um personagem com a vida igual a zero.",()=>{
        const result = validateCharacter({
            name: "Luffy",
            life: 0,
            strength: 500,
            defense: 300,
          });

          expect(result).toBe(false);
    })

    test("Teste 3: verifique o comportamento da função com um personagem com a força igual a zero.",()=>{
        const result = validateCharacter({
            name: "Luffy",
            life: 1500,
            strength: 0,
            defense: 300,
          });

          expect(result).toBe(true);
    })

    test("Teste 4:verifique o comportamento da função com um personagem com a defesa igual a zero.",()=>{
        const result = validateCharacter({
            name: "Luffy",
            life: 1500,
            strength: 500,
            defense: 0,
          });

          expect(result).toBe(false);
    })

    test("Teste 5:verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo",()=>{
        const result = validateCharacter({
            name: "Luffy",
            life: - 1500,
            strength: 500,
            defense: 300,
          });

          expect(result).toBe(false);
    })

    test("Teste 6: verifique o comportamento da função com um personagem com as informações validas ",()=>{
        const result = validateCharacter({
            name: "Luffy",
            life: 1500,
            strength: 500,
            defense: 300,
          });

          expect(result).toBe(true);
    })
})