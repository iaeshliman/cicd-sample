export class CalculateDTO {
    operator: string
    x: number
    y: number

    constructor(operator: string, x: number, y: number) {
        this.operator = operator
        this.x = x
        this.y = y
    }
}
