import { CalculateDTO } from './calculator.dto'

export class CalculatorService {
    constructor() {}

    calculate({ operator, x, y }: CalculateDTO): number {
        switch (operator) {
            case '+':
                return this.sum(x, y)
            case '-':
                return this.difference(x, y)
            case '*':
                return this.product(x, y)
            case '/':
                return this.quotient(x, y)
            default:
                throw new Error(`unsupported operator '${operator}'`)
        }
    }

    private sum(x: number, y: number): number {
        return x + y
    }

    private difference(x: number, y: number): number {
        return x - y
    }

    private product(x: number, y: number): number {
        return x * y
    }

    private quotient(x: number, y: number): number {
        return x / y
    }
}
