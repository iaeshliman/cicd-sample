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

        it('3 + 2 = 5', () => {
            expect(
                calculatorService.calculate({ operator: '+', x: 3, y: 2 })
            ).toBe(5)
        })
    })
})
