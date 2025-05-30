import { Calculator } from "./calculator.class";

/** Example 2 Calculator */
function sumValuesFromMain(x: number, y: number): number {
    return x + y;
}

// método desde main
let sum: number = sumValuesFromMain(3, 3);

// métodos desde clase "Calculator"
let calculator: Calculator = new Calculator();

let sumResult: number = calculator.sumValues(2, 1);
let subResult: number = calculator.substractValues(2, 1);

// variables de tipo función flecha
let mult = (x: number, y: number) => x * y;
let div = (x: number, y: number) => x / y;
let multResult: number = calculator.executeOperation(2, 4, mult);
let divResult: number = calculator.executeOperation(2, 4, mult);

// resultados
console.log(sum);
console.log(sumResult);
console.log(subResult);

console.log(multResult);
console.log(divResult);

