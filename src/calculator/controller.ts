import { Request, Response, NextFunction, Router } from 'express'
import { CalculatorService } from './service'

export class CalculatorController {
    readonly pathPrefix = '/v1/calculator'

    constructor(
        router: Router,
        private readonly calculatorService: CalculatorService
    ) {
        router.post(this.pathPrefix, this.calculate.bind(this))
    }

    async calculate(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const result = this.calculatorService.calculate(req.body)
            res.send({ ok: true, data: result })
        } catch (error) {
            next(error)
        }
    }
}
