export type calculatorType = (x: number, y: number) => number;

export class Calculator {
    sumValues(x: number, y: number): number {
        return x + y;
    }

    substractValues(x: number, y: number): number {
        return x - y;
    }

    executeOperation(x: number, y: number,
        solve: calculatorType): number {
        return solve(x, y);
    }
}

export function helloWorld(message: string): string {
    return 'Hello World: ' + message;
}

