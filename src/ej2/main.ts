import { Calculator } from "./calculator";

/** Example 2 Calculator */
function sumValuesFromMain(x: number, y: number): number {
    return x + y;
}

let z: number = sumValuesFromMain(3, 3);
let cal: Calculator = new Calculator();
let x: number = cal.sumValues(2, 1);
let y: number = cal.substractValues(2, 1);

console.log(z);
console.log(x);
console.log(y);

