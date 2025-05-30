import { Calculator } from "../interfaces/calculator.interface";

export class Substract implements Calculator {
    calculate(x: number, y: number): number {
        return x - y;
    }
}