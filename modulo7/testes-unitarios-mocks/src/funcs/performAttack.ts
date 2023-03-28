import { Character } from "../model/character";


// Depende da outra função(que esta em outro arquivo) para funcionar
// import { validateCharacter } from "./validateCharacter";
// export const performAttack = (attacker: Character, defender: Character) => {
//     if (!validateCharacter(attacker) || !validateCharacter(defender)) {
//       throw new Error("Invalid character");
//     }

//     if (attacker.strength > defender.defense) {
//       defender.life -= attacker.strength - defender.defense;
//     }
//   };


// Testa de forma independente(mais facil de achar erros)
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};