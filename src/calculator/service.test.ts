import { CalculatorService } from './service'

describe('calculator service', () => {
    const calculatorService = new CalculatorService()

    it('exists', () => {
        expect(calculatorService).toBeDefined()
    })

    describe('calculate', () => {
        it('exists', () => {
            expect(calculatorService.calculate).toBeDefined()
        })

        it.each([
            { args: { operator: '+', x: 3, y: 2 }, expected: 5 },
            { args: { operator: '-', x: 3, y: 2 }, expected: 1 },
            { args: { operator: '*', x: 3, y: 2 }, expected: 6 },
            { args: { operator: '/', x: 3, y: 2 }, expected: 3 / 2 },
        ])(
            '$args.x $args.operator $args.y = $expected',
            ({ args, expected }) => {
                expect(calculatorService.calculate(args)).toBe(expected)
            }
        )
    })
})
