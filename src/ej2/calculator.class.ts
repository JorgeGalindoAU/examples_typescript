export class Calculator {
    sumValues(x: number, y: number): number {
        return x + y;
    }

    substractValues(x: number, y: number): number {
        return x - y;
    }

    executeOperation(x: number, y: number, solve: (x: number, y: number) => number): number {
        return solve(x, y);
    }
}

